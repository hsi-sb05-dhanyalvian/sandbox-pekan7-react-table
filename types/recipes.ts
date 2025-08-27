//- types/recipes.ts

export interface Recipe {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export interface RecipeDetail extends Recipe {
  ingredients: string[];
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
  mealType: string[];
};
