import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import marvelApi from 'src/app/services/marvel-api';
import { IOptions } from 'src/app/utils/Interfaces/IOptions';
import { environment } from 'src/environments/environment';

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
  data: any = [];
  multipleLimite: number = 0;
  total: number = 0;
  searchType: string = 'characters';
  searchParam: string = 'nameStartsWith';
  firstRequest: boolean = true;
  dropdownOptions: Array<IOptions> = [
    {
      label: 'characters',
      value: 'nameStartsWith',
    },
    {
      label: 'creators',
      value: 'nameStartsWith',
    },
  ]
  imageNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  gitNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif';

  constructor(
    private router: Router,
  ) {
  }

  getData = () => {
    if ((this.total < this.offset) || this.searchValue.length === 0) return;
    this.loading = true;
    marvelApi.get(
      `/${this.searchType}?limit=10&offset=${this.offset}&${this.searchParam}=${this.searchValue}&apikey=${environment.API_KEY}`
    )
      .then(({ data }) => {
        this.data = this.data.concat(data.data.results);
        this.total = data.data.total;
      })
      .finally(() => {
        this.loading = false;
        this.firstRequest = false;
      });
    this.multipleLimite++;
    this.offset = this.limit * this.multipleLimite;
  }

  onScrollDown = () => {
    this.getData();
  }

  getImage = (image: string, format: string) => {
    if (this.imageNotAvailableUrl === `${image}.${format}` || this.gitNotAvailableUrl === `${image}.${format}`) return '../../../assets/not-found.jpeg';
    return `${image}.${format}`;
  }

  setSearchValue = (e: any) => {
    this.searchValue = e.target.value;
  }

  newSearch = () => {
    this.data = [];
    this.multipleLimite = 1;
    this.offset = 0;
    this.getData();
  }

  onSelectSearchType = (item: IOptions) => {
    this.searchParam = item.value;
    this.searchType = item.label;
    this.newSearch();
  }

  onSelectItem = (item: any) => {
    this.router.navigate([`/profile/${this.searchType}/${item.id}`]);
  }
}
