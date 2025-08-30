//- app/socials/quotes/type.ts

import { BaseResponse } from "@/app/type";

export interface Quote {
  quote: string;
  author: string;
}

export interface QuoteResponse extends BaseResponse {
  quotes: Quote[];
};
