import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-characters-loading',
  templateUrl: './characters-loading.component.html',
  styleUrls: ['./characters-loading.component.scss']
})
export class CharactersLoadingComponent {
  @Input() isMobile: boolean = false;

  constructor() { }

  getGridArea = (index: number) => {
    if (!this.isMobile) {
      return (index + 1) % 3 === 0 ? {'grid-area': `span 2 / span 4`} : {'grid-area': 'span 2 /  span 2'}
    }
    if (index === 0) return {'grid-area': `1 / 1 / span 2 / span 2`};
    if (index === 7) return {'grid-area': `4 / 1 / span 2 / span 3`};
    return {'grid-area': 'auto'};
  }
}
