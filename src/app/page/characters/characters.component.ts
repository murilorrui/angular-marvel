import { Component, OnInit } from '@angular/core';
import marvelApi from 'src/app/services/marvel-api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any = [];
  throttle: number = 10;
  scrollDistance: number = 1;
  scrollUpDistance: number = 2;
  limit: number = 10;
  offset: number = 0;
  total: number = 0;
  multipleLimite: number = 0;
  loading: boolean = false;
  imageNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  gitNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif';
  constructor() {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters = () => {
    if (this.total < this.offset) return;
    this.loading = true;
    marvelApi.get(`/characters?limit=10&offset=${this.offset}&apikey=${environment.API_KEY}`)
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

    if (index === 6) {
      return {'grid-area': `4 / 1 / span 2 / span 3`}
    }

    return {'grid-area': 'auto'};
  }

  formatCharacterName = (name: string) => {
    return name.split(/[\*+/_(]/)[0]
  }

  getCharacterImage = (image: string, format: string) => {
    if (this.imageNotAvailableUrl === `${image}.${format}` || this.gitNotAvailableUrl === `${image}.${format}`) return '../../../assets/not-found.jpeg';
    return `${image}.${format}`;
  }
}