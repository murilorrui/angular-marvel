import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  imageNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  gifNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif';

  constructor() { }

  public getImage = (image: string, format: string) => {
    if (this.imageNotAvailableUrl === `${image}.${format}` || this.gifNotAvailableUrl === `${image}.${format}`) return '../../../assets/not-found.jpeg';
    return `${image}.${format}`;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    return window.innerWidth;
  }
}
