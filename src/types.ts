type ValueAndDetail = {
  value: number;
  detail: string;
}

export interface StringMap {
  [key: string]: string;
}

export interface ICountryResponse {
  countries: Record<string, string>;
  iso3: Record<string, string>;
}

export interface IStatsResponse {
  confirmed: ValueAndDetail;
  recovered: ValueAndDetail;
  deaths: ValueAndDetail;
  lastUpdate: Date;
}

export interface IWorldTableResponse {
  id: number,
  country_name: string,
  confirmed_cases: string,
  cases_per_1_million_people: string,
  recovered: string,
  deaths: string
}

export type UseDataApiArgs = {
  initUrl: string;
  defaultData?: any;
  bodyData?: object | any[];
}

export type UseDataApiResponse<T> = [
  {
    isLoading: boolean;
    isError: boolean;
    data?: T | undefined;
  },
  // Dispatch<string>,
]
