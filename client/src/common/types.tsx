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
