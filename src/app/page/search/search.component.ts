import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.services';
import { ICharacterDataContainer, ICreatorDataContainer } from 'src/app/utils/Interfaces/IMarvelApi';
import { IOptions } from 'src/app/utils/Interfaces/IOptions';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = '';
  offset: number = 0;
  limit: number = 10;
  loading: boolean = false;
  throttle: number = 10;
  scrollDistance: number = 1;
  scrollUpDistance: number = 2;
  initialData = {
    offset: 0,
    limit: 0, 
    total: 0,
    count: 0,
    results: []
  }
  characters: ICharacterDataContainer = this.initialData;
  creators: ICreatorDataContainer = this.initialData;
  multipleLimit: number = 0;
  total: number = 0;
  searchType: string = 'characters';
  firstRequest: boolean = true;
  dropdownOptions: Array<IOptions> = [
    {
      label: 'characters',
      value: 'characters',
    },
    {
      label: 'creators',
      value: 'creators',
    },
  ]

  constructor(
    private router: Router,
    private marvelService: MarvelService,
    public utilsService: UtilsService
  ) {
  }

  getCharacter = () => {
    if ((this.total < this.offset) || this.searchValue.length === 0) return;
    this.loading = true;
    this.marvelService.getCharacters(
      this.limit, 
      this.offset,
      this.searchValue
    ).subscribe(({ data }) => {
        this.characters = { ...data, results: this.characters.results.concat(data.results) };
        this.total = data.total;
        this.multipleLimit++;
        this.offset = this.limit * this.multipleLimit;
        this.loading = false;
        this.firstRequest = false;
      })
  }

  getCreator = () => {
    if ((this.total < this.offset) || this.searchValue.length === 0) return;
    this.loading = true;
    this.marvelService.getCreators(
      this.limit, 
      this.offset,
      this.searchValue
    ).subscribe(({ data }) => {
        this.creators = { ...data, results: this.creators.results.concat(data.results) };
        this.total = data.total;
        this.multipleLimit++;
        this.offset = this.limit * this.multipleLimit;
        this.loading = false;
        this.firstRequest = false;
      })
  }

  onScrollDown = () => {
    this.searchType === 'characters' ? this.getCharacter() : this.getCreator();
  }

  get getItems() {
    return this.searchType ? this.characters.results : this.creators.results;
  }

  setSearchValue = (e: any) => {
    this.searchValue = e.target.value;
  }

  newSearch = () => {
    this.characters = this.initialData;
    this.creators = this.initialData;
    this.multipleLimit = 0;
    this.offset = 0;
    this.searchType === 'characters' ? this.getCharacter() : this.getCreator();
  }

  onSelectSearchType = (item: IOptions) => {
    this.searchType = item.value;
    this.newSearch();
  }

  onSelectItem = (id: number = 0) => {
    this.router.navigate([`/profile/${this.searchType}/${id}`]);
  }
}
