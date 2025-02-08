export interface Product {
  quantity: number;
  _id: string; // Use 'string' for IDs from Sanity
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