export interface CardInterface {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  },
  value: string;
  suit: string;
}