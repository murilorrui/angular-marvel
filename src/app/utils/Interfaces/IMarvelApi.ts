export interface ICharacterResponse {
  data: ICharacterDataContainer;
}
export interface ICreatorResponse {
  data: ICreatorDataContainer;
}
export interface IComicResponse {
  data: IComicDataContainer;
}
export interface ISeriesResponse {
  data: IComicDataContainer;
}

export interface IDefaultDataContainer {
  offset: number;
  limit: number; 
  total: number;
  count: number;
}

export interface ICharacterDataContainer extends IDefaultDataContainer {
  results: Array<ICharacter>;
}

export interface IComicDataContainer extends IDefaultDataContainer {
  results: Array<IComic>;
}

export interface ISeriesDataContainer extends IDefaultDataContainer {
  results: Array<ISeries>;
}

export interface ICreatorDataContainer extends IDefaultDataContainer {
  results: Array<ICreator>;
}

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Array<IUrl>;
  thumbnail: IImage;
  comics: IComicList;
  stories: IStoryList;
  events?: IEventList;
  series: ISeriesList;
}
export interface IComic {
  id?: number;
  digitalId?: number;
  title?: string;
  issueNumber?: number;
  variantDescription?: string;
  description?: string;
  modified?: Date; 
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string; 
  issn?: string; 
  format?: string; 
  pageCount?: number; 
  textObjects?: Array<ITextObject>; 
  resourceURI?: string; 
  urls?: Array<IUrl>; 
  series?: ISummary; 
  collections?: Array<ISummary>; 
  collectedIssues?: Array<ISummary>;
  dates?: Array<IComicDate>; 
  prices?: Array<IComicPrice>; 
  thumbnail?: IImage; 
  images?: Array<IImage>; 
  creators?: ICreatorList; 
  characters?: ICharacterList;
  stories?: IStoryList;
  events?: IEventList;
}

export interface ISeries {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  urls?: Array<IUrl> 
  startYear?: number;
  endYear?: number;
  rating?: string;
  modified?: Date;
  thumbnail?: IImage; 
  comics?: IComicList;
  stories?: IStoryList;
  events?: IEventList;
  characters?: ICharacterList;
  creators?: ICreatorList;
  nex?: ISummary;
  previous?: ISummary;
}

export interface ICreator {
  id: number;
  name?: string;
  firstName: string;
  middleName?: string;
  lastName?: string;
  description: string;
  suffix?: string; 
  fullName: string; 
  modified?: Date; 
  resourceURI?: string;
  urls?: Array<IUrl>; 
  thumbnail: IImage;
  series: ISeriesList;
  stories: IStoryList;
  comics: IComicList; 
  events?: IEventList;
}

export interface IDefaultList {
  available: number;
  returned?: number; 
  collectionURI?: string; 
}

export interface IComicList extends IDefaultList {
  items?: Array<ISummary>;
}

export interface ISeriesList extends IDefaultList {
  items: Array<ISummary>;
}

export interface ICreatorList extends IDefaultList {
  items?: Array<ISummary>;
}

export interface IStoryList extends IDefaultList {
  items?: Array<ISummary>;
}

export interface ICharacterList extends IDefaultList {
  items?: Array<ISummary>;
}
export interface IEventList extends IDefaultList {
  items?: Array<ISummary>;
}

export interface ISummary {
  resourceURI?: string;
  name?: string;
  type?: string;
  role?: string;
}

export interface ITextObject {
  type?: string;
  language?: string;
  text?: string;
}
export interface IUrl {
  type?: string;
  url?: string;
}

export interface IComicDate {
  type?: string;
  date?: Date;
}

export interface IComicPrice {
  type?: string;
  price?: number;
}

export interface IImage {
  path?: string;
  extension?: string;
}