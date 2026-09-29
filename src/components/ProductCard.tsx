import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { formatCategory, formatPrice, formatRating } from "../utils/format";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="food-image">
        <div className="food-placeholder" aria-hidden="true">
          <span>{formatCategory(product.category)}</span>
          <strong>{product.title}</strong>
          <small>{product.region} · {product.dietary}</small>
        </div>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
      </div>
      <div className="product-card-body">
        <span className="badge">{formatCategory(product.category)}</span>
        <h2>{product.title}</h2>
        <p className="book-author">{product.region} · {product.prepTime} min</p>
        <div className="product-meta">
          <span className="price">{formatPrice(product.price)}</span>
          <span className="rating">&#9733; {formatRating(product.rating)} · {product.spiceLevel}</span>
        </div>
        <Link to={`/products/${product.id}`} className="btn">
          <span>View dish</span><span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
