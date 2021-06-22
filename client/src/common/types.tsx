export interface MyPlant {
  _id?: string;
  name: string;
  plantID: number;
  __v?: number;
}

export interface Task {
  _id?: string;
  month: string;
  week?: string;
  crop: string;
  task: string;
  userCreated?: boolean;
}

interface OpenFarmData {
  attributes: {
    main_image_path: string;
    common_names: string[];
    description: string;
    sun_requirements: string;
  }
}

export interface Plant {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  name: string;
  description?: string;
  slug: string;
  alternate_names: string[];
  scientific_names: string[];
  photos_count: number;
  plantings_count: number;
  harvests_count: number;
  planters_ids: number[];
  has_photos: boolean;
  thumbnail_url: string;
  scientific_name?: string;
  created_at: number;
  id: string;
  details: OpenFarmData;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

interface Rain {
  '1h': number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Coord {
  lon: number;
  lat: number;
}

export interface APIWeather {
  coord?: Coord;
  weather?: Weather[];
  base?: string;
  main?: Main;
  visibility?: number;
  wind?: Wind;
  rain?: Rain;
  clouds?: Clouds;
  dt?: number;
  sys?: Sys;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
  icon_link?: string;
}
