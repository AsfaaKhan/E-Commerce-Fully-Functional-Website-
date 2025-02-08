export interface Product {
  quantity: number;
  _id: string; 
  title: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  description: string;
  isNew?: boolean;
  imageUrl: string;
  inventory:number,
  slug: {
    current: string;
  };
}