export type Product = {
  _id: string;
  sale: boolean;
  featured: boolean;
  new: true;
  numReviews: number;
  price: number;
  countInStock: number;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  user: string;
  reviews: [];
};

export interface ProductType {
  loading: boolean;
  error: string | null;
  productSale: Product[];
  productNew: Product[];
}
