//- app/manages/products/type.ts

import { BaseResponse } from "@/app/type";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  availabilityStatus: string;
  thumbnail: string;
}

export interface ProductResponse extends BaseResponse {
  products: Product[];
}
