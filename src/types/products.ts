export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
}

export type ProductResponse = {
  products: Product[];
  skip: number;
  total: number;
  limit: number;
}