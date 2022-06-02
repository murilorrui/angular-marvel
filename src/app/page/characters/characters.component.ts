import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.services';
import { UtilsService } from 'src/app/services/utils.service';
import { ICharacter, ICharacterDataContainer } from 'src/app/utils/Interfaces/IMarvelApi';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: ICharacterDataContainer = {
    limit: 10,
    offset: 0,
    total: 0,
    count: 0,
    results: []
  };
  limit: number = 10;
  multipleLimit: number = 0;
  loading: boolean = false;
  getScreenWidth: number = 0;
  throttle: number = 10;
  scrollDistance: number = 1;

  constructor(
    private router: Router,
    private marvelService: MarvelService,
    public utilsService: UtilsService
  ) {
    this.getScreenWidth = window.innerWidth;
    this.limit = this.isMobile ? 10 : 27;
    this.characters.offset = this.marvelService.getOffset() || 0;
    this.characters.total = this.characters.offset;
    this.multipleLimit = this.characters.offset / this.limit;
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters = () => {
    if ((this.characters.total < this.characters.offset) || this.loading) return;
    this.loading = true;
    this.marvelService.getCharactersWithCache(this.limit, this.characters.offset)
      .subscribe(({ data }) => { 
        this.multipleLimit++;
        this.characters = { ...data, offset: this.limit * this.multipleLimit };
        this.loading = false;
      })
  }

  onScrollDown = () => {
    this.getCharacters();
  }

  getGridArea = (index: number) => {
    if (!this.isMobile) {
      return (index + 1) % 3 === 0 ? {'grid-area': `span 2 / span 4`} : {'grid-area': 'span 2 /  span 2'}
    }
    if (index === 0) return {'grid-area': `1 / 1 / span 2 / span 2`};
    if (index === 7) return {'grid-area': `4 / 1 / span 2 / span 3`};
    return {'grid-area': 'auto'};
  }

  formatCharacterName = (name: string) => {
    return name.split(/[\*+/_(]/)[0]
  }

  onSelectItem = (item: ICharacter) => {
    this.router.navigate([`/profile/characters/${item.id}`]);
  }

  get isMobile() {
    return this.utilsService.onWindowResize() < 426;
  }
}
