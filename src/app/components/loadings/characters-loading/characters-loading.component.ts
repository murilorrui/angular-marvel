import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-characters-loading',
  templateUrl: './characters-loading.component.html',
  styleUrls: ['./characters-loading.component.scss']
})
export class CharactersLoadingComponent {
  @Input() getScreenWidth: number = 0;

  constructor() { }

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
}
