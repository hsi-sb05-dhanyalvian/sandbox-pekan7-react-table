//- types/recipes.ts

import { BaseResponse } from "@/app/type";

export interface Recipe {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  mealType: string[];
  ingredients: string[];
  image: string;
  tags: string[];
  rating: number;
};

export interface RecipeDetail extends Recipe {
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  userId: number;
  reviewCount: number;
};

export interface RecipeResponse extends BaseResponse {
  recipes: Recipe[];
};
