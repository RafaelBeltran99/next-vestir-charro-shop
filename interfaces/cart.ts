import { ISize } from "./";

export interface ICartProduct {
  _id: string;
  image: string;
  price: number;
  size?: ISize;
  slug: string;
  title: string;
  gender: "charros" | "escaramuzas" | "charritos" | "unisex";
  quantity: number;
}
