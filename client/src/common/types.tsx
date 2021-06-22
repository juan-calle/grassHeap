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
}
