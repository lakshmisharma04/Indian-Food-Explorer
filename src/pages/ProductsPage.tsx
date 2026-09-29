import { useMemo, useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { ProductList } from "../components/ProductList";
import { RatingFilter } from "../components/RatingFilter";
import { SearchBar } from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import { filterProducts, getCategories } from "../utils/filterProducts";

export function ProductsPage() {
  const { products, loading, error, retry } = useProducts();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [dietary, setDietary] = useState<"all" | "Vegetarian" | "Non-vegetarian">("all");

  const categories = useMemo(() => getCategories(products), [products]);
  const visibleProducts = useMemo(
    () => filterProducts(products, { query, category, minRating, dietary }),
    [products, query, category, minRating, dietary],
  );

  const hasActiveFilters = query !== "" || category !== "all" || minRating !== 0 || dietary !== "all";

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setMinRating(0);
    setDietary("all");
  };

  const renderContent = () => {
    if (loading) return <LoadingState message="Loading the menu..." />;
    if (error) return <ErrorState message="Unable to load the menu." onRetry={retry} />;
    if (visibleProducts.length === 0) {
      return (
        <EmptyState
          message="No dishes found. Try another search or category."
          actionLabel="Clear filters"
          onAction={clearFilters}
        />
      );
    }
    return (
      <>
        <p className="result-count">
          <span>ON THE MENU</span> Showing {visibleProducts.length} of {products.length} dishes
        </p>
        <ProductList products={visibleProducts} />
      </>
    );
  };

  return (
    <section className="catalog-page">
      <header className="catalog-heading">
        <div className="catalog-intro">
          <p className="eyebrow"><span className="eyebrow-dot" /> Indian Food Explorer <span className="eyebrow-divider">/</span> Regional favourites</p>
          <h1 className="page-title">A little spice. <em>A lot of soul.</em></h1>
          <p className="catalog-description">From street-side chaats to slow-cooked biryani, discover the dishes India comes back to.</p>
        </div>
        <aside className="collection-note" aria-label="Collection overview">
          <span className="note-label">ON THE MENU</span>
          <div className="note-number">{products.length.toString().padStart(2, "0")}<span> dishes</span></div>
          <p>Big flavours, from every corner of India.</p>
          <div className="note-rule"><span /><span /><span /><span /><span /></div>
        </aside>
      </header>
      <div className="controls" aria-label="Filter the menu">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter categories={categories} value={category} onChange={setCategory} />
        <RatingFilter value={minRating} onChange={setMinRating} />
        <div className="field">
          <label htmlFor="diet">Diet</label>
          <select id="diet" value={dietary} onChange={(event) => setDietary(event.target.value as typeof dietary)}>
            <option value="all">Any diet</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-vegetarian">Non-vegetarian</option>
          </select>
        </div>
        {hasActiveFilters && (
          <button type="button" className="btn btn-outline" onClick={clearFilters}>
            Clear filters
          </button>
        )}
      </div>
      {renderContent()}
    </section>
  );
}
