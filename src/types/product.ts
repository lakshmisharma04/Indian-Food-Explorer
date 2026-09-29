export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  region: string;
  prepTime: number;
  spiceLevel: "Mild" | "Medium" | "Hot";
  dietary: "Vegetarian" | "Non-vegetarian";
  ingredients: string[];
  thumbnail: string;
}

export interface ProductFilters {
  query: string;
  category: string; // "all" means no category filter
  minRating: number; // 0 means no rating filter
  dietary: "all" | Product["dietary"];
}
