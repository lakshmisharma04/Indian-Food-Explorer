import type { Product, ProductFilters } from "../types/product";

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  const query = filters.query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesTitle = `${product.title} ${product.category} ${product.region} ${product.description} ${product.ingredients.join(" ")}`
      .toLowerCase()
      .includes(query);
    const matchesCategory =
      filters.category === "all" || product.category === filters.category;
    const matchesRating = product.rating >= filters.minRating;
    const matchesDiet = filters.dietary === "all" || product.dietary === filters.dietary;

    return matchesTitle && matchesCategory && matchesRating && matchesDiet;
  });
}

export function getCategories(products: Product[]): string[] {
  return [...new Set(products.map((product) => product.category))].sort();
}
