export interface ILocation {
  id: number;
  slug: string;
  city_slug: string;
  display: string;
  ascii_display: string;
  city_name: string;
  city_ascii_name: string;
  state: string;
  country: string;
  lat: null | string;
  long: null | string;
  result_type: ResultType;
  popularity: string;
  sort_criteria: number;
}

export enum ResultType {
  Airport = 'airport',
  City = 'city',
  Terminal = 'terminal',
}

export interface ICoordinates {
  lat: string;
  lon: string;
}
