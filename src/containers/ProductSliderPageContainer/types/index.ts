export type ProductType = {
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
  rating?: number;
};
