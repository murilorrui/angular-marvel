import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.services';
import { UtilsService } from 'src/app/services/utils.service';
import { ICharacter, ICreator, IComicDataContainer, ISeriesDataContainer, IImage } from 'src/app/utils/Interfaces/IMarvelApi';
import { IOptions } from 'src/app/utils/Interfaces/IOptions';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number | string | null = null;
  pageType: string | null = '';

  limit: number = 12;
  throttle: number = 5;
  scrollDistance: number = 1;
  
  searchType: string = 'comics';
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

  name: string = '';
  description: string = '';
  path: string = '';
  extension: string = '';
  comicsTotal: number = 0;
  seriesTotal: number = 0;
  storiesTotal: number = 0;
  loading: boolean = false;

  initialData = {
    count: 0,
    total: 0,
    offset: 0,
    limit: 0,
    results: [],
  }
  series: ISeriesDataContainer = this.initialData;
  comics: IComicDataContainer = this.initialData;
  multipleComics: number = 0;
  multipleSeries: number = 0;
  loadingComics: boolean = false;
  loadingSeries: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private marvelService: MarvelService,
    public utilsService: UtilsService
  ) {
    this.id = route.snapshot.paramMap.get('id');
    this.pageType = route.snapshot.paramMap.get('type');
  }

  ngOnInit(): void {
    this.getProfile();
    this.getComics();
    this.getSeries();
  }

  getProfile = () => {
    this.loading = true;
    if (this.pageType === 'creators') {
      this.marvelService.getCreatorById(this.id).subscribe(({ data }) => {
        const creator: ICreator = data.results[0];
        this.setProfileData(
          creator.fullName,
          creator.description,
          creator.thumbnail,
          creator.comics.available,
          creator.series.available,
          creator.stories.available,
        );
      })
      return;
    }
    this.marvelService.getCharacterById(this.id).subscribe(({ data }) => {
      const character: ICharacter = data.results[0];
      this.setProfileData(
        character.name,
        character.description,
        character.thumbnail,
        character.comics.available,
        character.series.available,
        character.stories.available,
      );
    })
  }

  setProfileData = (
    name: string,
    description: string,
    thumbnail: IImage,
    comicsTotal: number,
    seriesTotal: number,
    storiesTotal: number,
  ) => {
    this.name = name;
    this.description = description;
    this.path = thumbnail?.path || '';
    this.extension = thumbnail?.extension || '';
    this.comicsTotal = comicsTotal;
    this.seriesTotal = seriesTotal;
    this.storiesTotal = storiesTotal;
    this.loading = false;
  }

  onScrollDown = () => {
    this.searchType === 'comics' ? this.getComics() : this.getSeries();
  }

  getComics = () => {
    if ((this.comics.total < this.comics.offset) || this.loadingComics) return;
    this.loadingComics = true;
    this.marvelService.getComics(this.pageType, this.id, this.limit, this.comics.offset)
      .subscribe(({ data }) => { 
        this.multipleComics++;
        this.comics = { 
          ...data, 
          offset: this.limit * this.multipleComics,
          results: this.comics.results.concat(data.results)
        };
        this.loadingComics = false;
      })
  }

  getSeries = () => {
    if ((this.series.total < this.series.offset) || this.loadingSeries) return;
    this.loadingSeries = true;
    this.marvelService.getSeries(this.pageType, this.id, this.limit, this.series.offset)
      .subscribe(({ data }) => { 
        this.multipleSeries++;
        this.series = { 
          ...data, 
          offset: this.limit * this.multipleSeries,
          results: this.series.results.concat(data.results)
        };
        this.loadingSeries = false;
      })
  }

  onSelectMenu = (option: IOptions) => {
    this.searchType = option.value;
  }

  getImageNotFound = () => {
    return this.searchType === 'comics' ? '../../../assets/comic.png' : '../../../assets/series.png'
  }

  get isMobile() {
    return this.utilsService.onWindowResize() < 425;
  }
}
