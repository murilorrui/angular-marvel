import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import marvelApi from 'src/app/services/marvel-api';
import { ICharacter, IRequestDataContainer } from 'src/app/utils/Interfaces/IMarvelApi';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Array<ICharacter> = [];
  throttle: number = 1;
  scrollDistance: number = 0;
  scrollUpDistance: number = 2;
  limit: number = 10;
  offset: number = 0;
  total: number = 0;
  multipleLimite: number = 0;
  loading: boolean = false;
  getScreenWidth: number = 0 
  imageNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  gifNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif';

  constructor(private router: Router) {
    this.getScreenWidth = window.innerWidth;
    this.limit = this.getScreenWidth > 425 ? 18 : 10;
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters = () => {
    if ((this.total < this.offset) || this.loading) return;
    this.loading = true;
    marvelApi.get(`/characters?limit=${this.limit}&offset=${this.offset}&apikey=${environment.API_KEY}`)
      .then(({ data }) => {
        this.characters = this.characters.concat(data.data.results);
        this.total = data.data.total;
      })
      .finally(() => {
        this.loading = false;
      });
    this.multipleLimite++;
    this.offset = this.limit * this.multipleLimite;
  }

  onScrollDown = () => {
    this.getCharacters();
  }

  getGridArea = (index: number) => {
    if (index === 0) return {'grid-area': `1 / 1 / span 2 / span 2`};

    if (index === 2) {
      return this.getScreenWidth > 425 ? 
        {'grid-area': `1 / 5 / span 2 / span 4`} :
        {'grid-area': `4 / 1 / span 2 / span 3`}
    }

    if (index === 5) {
      return this.getScreenWidth > 425 ? 
        {'grid-area': `3 / 1 / span 2 / span 4`} :
        {'grid-area': 'auto'}
    }

    if (index === 7) {
      return this.getScreenWidth > 425 ? 
        {'grid-area': `3 / 9 / span 2 / span 4`} :
        {'grid-area': 'auto'}
    }

    if (index === 11) {
      return this.getScreenWidth > 425 ? 
        {'grid-area': `5 / 5 / span 2 / span 4`} :
        {'grid-area': 'auto'}
    }

    if (index === 14) {
      return this.getScreenWidth > 425 ? 
        {'grid-area': `7 / 1 / span 2 / span 4`} :
        {'grid-area': 'auto'}
    }

    if (index === 17) {
      return this.getScreenWidth > 425 ? 
        {'grid-area': `7 / 9 / span 2 / span 4`} :
        {'grid-area': 'auto'}
    }

    return this.getScreenWidth > 425 ? 
      {'grid-area': 'auto / auto / span 2 / span 2'} :
      {'grid-area': 'auto'}
  }

  formatCharacterName = (name: string) => {
    return name.split(/[\*+/_(]/)[0]
  }

  getCharacterImage = (image: string, format: string) => {
    if (this.imageNotAvailableUrl === `${image}.${format}` || this.gifNotAvailableUrl === `${image}.${format}`) return '../../../assets/not-found.jpeg';
    return `${image}.${format}`;
  }

  onSelectItem = (item: ICharacter) => {
    this.router.navigate([`/profile/characters/${item.id}`]);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
