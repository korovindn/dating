export interface IChat {
  id: number;
  name: string;
  image: string;
  last: { text: string; fromMe: boolean };
  date: string;
}