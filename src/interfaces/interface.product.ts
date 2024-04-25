export interface IProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  addButton?: any;
  removeButton?: any;
}

export interface IProductsResponse {
  products: IProductProps[];
}
