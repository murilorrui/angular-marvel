import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import marvelApi from 'src/app/services/marvel-api';
import { IOptions } from 'src/app/utils/Interfaces/IOptions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number | string | null = null;
  pageType: string | null = '';
  loading: boolean = false;
  loadingData: boolean = false;
  profile: any;
  data: any = [];
  offset: number = 0;
  limit: number = 3;
  throttle: number = 1;
  scrollDistance: number = 1;
  multipleLimite: number = 0;
  total: number = 0;
  menuOptions: Array<IOptions> = [
    {
      value: 'comics',
      label: 'Comics',
    },
    {
      value: 'series',
      label: 'Series',
    }
  ]
  searchType: string = 'comics';
  imageNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  gitNotAvailableUrl: string = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif';

  public getScreenWidth: any;
  
  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    this.pageType = route.snapshot.paramMap.get('type');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getProfile();
    this.getData();
    this.getScreenWidth = window.innerWidth;
  }

  getProfile = () => {
    this.loading = true;
    marvelApi.get(
      `/${this.pageType}/${this.id}?&apikey=${environment.API_KEY}`
    )
      .then(({ data }) => {
        console.log(data);
        this.profile = data.data.results[0];
      })
      .finally(() => {
        this.loading = false;
      });
  }

  onScrollDown = () => {
    this.getData();
  }

  getData = () => {
    if (this.total < this.offset) return;
    this.loadingData = true;
    marvelApi.get(
      `/${this.pageType}/${this.id}/${this.searchType}?limit=${this.limit}&offset=${this.offset}&apikey=${environment.API_KEY}`
    )
      .then(({ data }) => {
        this.data = this.data.concat(data.data.results);
        this.total = data.data.total;
      })
      .finally(() => {
        this.loadingData = false;
      });
    this.multipleLimite++;
    this.offset = this.limit * this.multipleLimite;
  }

  getImage = (image: string, format: string) => {
    if (this.imageNotAvailableUrl === `${image}.${format}` || this.gitNotAvailableUrl === `${image}.${format}`) return '../../../assets/not-found.jpeg';
    return `${image}.${format}`;
  }

  newSearch = () => {
    this.data = [];
    this.multipleLimite = 1;
    this.offset = 0;
    this.getData();
  }

  onSelectMenu = (option: IOptions) => {
    this.searchType = option.value;
    this.newSearch();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);
  }
}
