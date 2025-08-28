//- types/recipes.ts

export interface Recipe {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  mealType: string[];
  ingredients: string[];
};

export interface RecipeDetail extends Recipe {
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
};

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};
