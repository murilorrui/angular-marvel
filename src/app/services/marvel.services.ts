import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { 
  ICharacterResponse,
  IComicResponse,
  ICreatorResponse,
  ISeriesResponse 
} from '../utils/Interfaces/IMarvelApi';

@Injectable({
    providedIn: 'root',
})
export class MarvelService {
    private cache: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private http: HttpClient) {}

    public getOffset = () => {
      if (!this.cache.getValue()) return;
      return this.cache.getValue().data.offset;
    }

    public getCharactersWithCache = (limit: number, offset: number): Observable<ICharacterResponse> => {
      if (this.cache.getValue() && this.cache.getValue().data.offset === offset) {
        return new Observable<any>((observer) => {
            observer.next(this.cache.getValue());
        });
      }

      return this.http.get<ICharacterResponse>(
          `${environment.MARVEL_API}/characters?limit=${limit}&offset=${offset}&apikey=${environment.API_KEY}`
        ).pipe(
          map((response: ICharacterResponse) => {
            if (this.cache.getValue()) {
              response.data = { ...response.data, results: this.cache.getValue().data.results.concat(response.data.results) }
            }
            this.cache.next(response);
            return this.cache.getValue();
          })
        );
    }

    public getCharacters = (limit: number, offset: number, value: string) => {
      return this.http.get<ICharacterResponse>(
        `${environment.MARVEL_API}/characters?limit=${limit}&offset=${offset}&nameStartsWith=${value}&apikey=${environment.API_KEY}`
      );
    }

    public getCharacterById = (id: number | string | null ) => {
      return this.http.get<ICharacterResponse>(
        `${environment.MARVEL_API}/characters/${id}?&apikey=${environment.API_KEY}`
      );
    }
    
    public getCreators = (limit: number, offset: number, value: string) => {
      return this.http.get<ICreatorResponse>(
        `${environment.MARVEL_API}/creators?limit=${limit}&offset=${offset}&nameStartsWith=${value}&apikey=${environment.API_KEY}`
      );
    }

    public getCreatorById = (id: number | string | null ) => {
      return this.http.get<ICreatorResponse>(
        `${environment.MARVEL_API}/creators/${id}?&apikey=${environment.API_KEY}`
      );
    }

    public getComics = (profileType: string | null, id: string | number | null, limit: number, offset: number) => {
      return this.http.get<IComicResponse>(
        `${environment.MARVEL_API}/${profileType}/${id}/comics?limit=${limit}&offset=${offset}&apikey=${environment.API_KEY}`
      );
    }

    public getSeries = (profileType: string | null, id: string | number | null, limit: number, offset: number) => {
      return this.http.get<ISeriesResponse>(
        `${environment.MARVEL_API}/${profileType}/${id}/series?limit=${limit}&offset=${offset}&apikey=${environment.API_KEY}`
      );
    }

}