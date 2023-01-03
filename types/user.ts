export interface IUser {
  id: number;
  name: string;
  age: number;
  distance: number;
  desc: string;
  images: string[];
  interests: IInterest[];
}

export interface IInterest {
  title: string;
  weight: number;
}
