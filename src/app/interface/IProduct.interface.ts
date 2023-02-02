export default interface IProduct {
  id: number;
  description: string;
  price: number;
  descriptionPrice: string;
  availability: number;
  discount?: number;
  image: string;
}