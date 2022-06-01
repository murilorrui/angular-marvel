export interface IRequestDataContainer {
  offset?: number; // The requested offset (number of skipped results) of the call.,
  limit?: number; // The requested result limit.,
  total?: number; // The total number of resources available given the current filter set.,
  count?: number; // The total number of results returned by this call.,
  results: Array<IComic | ICharacter | ISeries | ICreator>; // The list of comics returned by the call
}

export interface ICharacter {
  id?: number; // The unique ID of the character resource.,
  name?: string; // The name of the character.,
  firstName?: string;
  fullName?: string;
  description?: string; // A short bio or description of the character.,
  modified?: Date; // The date the resource was most recently modified.,
  resourceURI?: string; // The canonical URL identifier for this resource.,
  urls?: Array<IUrl>; //A set of public web site URLs for the resource.,
  thumbnail?: IImage; // The representative image for this character.,
  comics?: IComicList; // A resource list containing comics which feature this character.,
  stories?: IStoryList; // A resource list of stories in which this character appears.,
  events?: IEventList; // A resource list of events in which this character appears.,
  series?: ISeriesList; // A resource list of series in which this character appears.
}

export interface IComicList {
  available?: number; // The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; // The number of issues returned in this collection (up to 20).,
  collectionURI?: string; // The path to the full list of issues in this collection.,
  items?: Array<IComicSummary>; // The list of returned issues in this collection.
}

export interface ISeriesList {
  available?: number; // The number of total available series in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; // The number of series returned in this collection (up to 20).,
  collectionURI?: string; // The path to the full list of series in this collection.,
  items?: Array<ISeriesSummary> // The list of returned series in this collection.
}

export interface IComic {
  id?: number; // The unique ID of the comic resource.,
  digitalId?: number; // The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.,
  title?: string; // The canonical title of the comic.,
  issueNumber?: number; // The number of the issue in the series (will generally be 0 for collection formats).,
  variantDescription?: string; // If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
  description?: string; // The preferred description of the comic.,
  modified: Date; // The date the resource was most recently modified.,
  isbn?: string; // The ISBN for the comic (generally only populated for collection formats).,
  upc?: string; // The UPC barcode number for the comic (generally only populated for periodical formats).,
  diamondCode?: string; // The Diamond code for the comic.,
  ean?: string; // The EAN barcode for the comic.,
  issn?: string; // The ISSN barcode for the comic.,
  format?: string; // The publication format of the comic e.g. comic, hardcover, trade paperback.,
  pageCount?: number; // The number of story pages in the comic.,
  textObjects?: Array<ITextObject>; // A set of descriptive text blurbs for the comic.,
  resourceURI?: string; // The canonical URL identifier for this resource.,
  urls?: Array<IUrl>; // A set of public web site URLs for the resource.,
  series?: ISeriesSummary; // A summary representation of the series to which this comic belongs.,
  variants?: Array<IComicSummary>; // A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
  collections?: Array<IComicSummary>; // A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
  collectedIssues?: Array<IComicSummary>; // A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
  dates?: Array<IComicDate>; // A list of key dates for this comic.,
  prices?: Array<IComicPrice>; // A list of prices for this comic.,
  thumbnail?: IImage; // The representative image for this comic.,
  images?: Array<IImage>; // A list of promotional images associated with this comic.,
  creators?: ICreatorList; // A resource list containing the creators associated with this comic.,
  characters?: ICharacterList; // A resource list containing the characters which appear in this comic.,
  stories?: IStoryList; // A resource list containing the stories which appear in this comic.,
  events?: IEventList; // A resource list containing the events in which this comic appears.
}

export interface ISeries {
  id?: number; //  The unique ID of the series resource.,
  title?: string; //  The canonical title of the series.,
  description?: string; //  A description of the series.,
  resourceURI?: string; //  The canonical URL identifier for this resource.,
  urls?: Array<IUrl> // A set of public web site URLs for the resource.,
  startYear?: number; //  The first year of publication for the series.,
  endYear?: number; //  The last year of publication for the series (conventionally, 2099 for ongoing series) .,
  rating?: string; //  The age-appropriateness rating for the series.,
  modified?: Date; // The date the resource was most recently modified.,
  thumbnail?: IImage; // The representative image for this series.,
  comics?: IComicList; // A resource list containing comics in this series.,
  stories?: IStoryList; // A resource list containing stories which occur in comics in this series.,
  events?: IEventList; // A resource list containing events which take place in comics in this series.,
  characters?: ICharacterList; // A resource list containing characters which appear in comics in this series.,
  creators?: ICreatorList; // A resource list of creators whose work appears in comics in this series.,
  next?: ISeriesSummary; // A summary representation of the series which follows this series.,
  previous?: ISeriesSummary; // A summary representation of the series which preceded this series.
}

export interface ICreator {
  id?: number; // The unique ID of the creator resource.,
  name?: string; // The first name of the creator.,
  firstName?: string; // The first name of the creator.,
  middleName?: string; // The middle name of the creator.,
  lastName?: string; // The last name of the creator.,
  description?: string; // A short bio or description of the creator.,
  suffix?: string; // The suffix or honorific for the creator.,
  fullName: string; // The full name of the creator (a space-separated concatenation of the above four fields).,
  modified?: Date; // The date the resource was most recently modified.,
  resourceURI?: string; // The canonical URL identifier for this resource.,
  urls?: Array<IUrl>; // A set of public web site URLs for the resource.,
  thumbnail?: IImage; // The representative image for this creator.,
  series?: ISeriesList; // A resource list containing the series which feature work by this creator.,
  stories?: IStoryList; // A resource list containing the stories which feature work by this creator.,
  comics?: IComicList; // A resource list containing the comics which feature work by this creator.,
  events?: IEventList; // A resource list containing the events which feature work by this creator.
}

export interface ITextObject {
  type?: string; // The canonical type of the text object (e.g. solicit text, preview text, etc.).,
  language?: string; // The IETF language tag denoting the language the text object is written in.,
  text?: string; // The text.
}
  
export interface IUrl {
  type?: string; // A text identifier for the URL.,
  url?: string; // A full URL (including scheme, domain, and path).
}

export interface ISeriesSummary {
  resourceURI?: string; // The path to the individual series resource.,
  name?: string; // The canonical name of the series.
}

export interface IComicSummary {
  resourceURI?: string; // The path to the individual comic resource.,
  name?: string; // The canonical name of the comic.
}

export interface IComicDate {
  type?: string; // A description of the date (e.g. onsale date, FOC date).,
  date?: Date; // The date.
}

export interface IComicPrice {
  type?: string; // A description of the price (e.g. print price, digital price).,
  price?: number; // The price (all prices in USD).
}

export interface IImage {
  path?: string; // The directory path of to the image.,
  extension?: string; // The file extension for the image.
}

export interface ICreatorList {
  available?: number; // The number of total available creators in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; // The number of creators returned in this collection (up to 20).,
  collectionURI?: string; // The path to the full list of creators in this collection.,
  items?: Array<ICreatorSummary>; // The list of returned creators in this collection.
}

export interface ICreatorSummary {
  resourceURI?: string; // The path to the individual creator resource.,
  name?: string; // The full name of the creator.,
  role?: string; // The role of the creator in the parent entity.
}

export interface ICharacterList {
  available?: number; // The number of total available characters in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; // The number of characters returned in this collection (up to 20).,
  collectionURI?: string; // The path to the full list of characters in this collection.,
  items?: Array<ICharacterSummary>; // The list of returned characters in this collection.
}

export interface ICharacterSummary {
  resourceURI?: string; // The path to the individual character resource.,
  name?: string; // The full name of the character.,
  role?: string; // The role of the creator in the parent entity.
}
  
export interface IStoryList {
  available?: number; // The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; // The number of stories returned in this collection (up to 20).,
  collectionURI?: string; // The path to the full list of stories in this collection.,
  items?: Array<IStorySummary>; // The list of returned stories in this collection.
}

export interface IStorySummary {
  resourceURI?: string; // The path to the individual story resource.,
  name?: string; // The canonical name of the story.,
  type?: string; // The type of the story (interior or cover).
}

export interface IEventList {
  available?: number; // The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number; // The number of events returned in this collection (up to 20).,
  collectionURI?: string; // The path to the full list of events in this collection.,
  items?: Array<IEventSummary>; // The list of returned events in this collection.
}

export interface IEventSummary {
  resourceURI?: string; // The path to the individual event resource.,
  name?: string; // The name of the event.
}