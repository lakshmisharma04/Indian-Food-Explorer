import { Link, useParams } from "react-router-dom";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { useProduct } from "../hooks/useProduct";
import { formatCategory, formatPrice, formatRating } from "../utils/format";
import { parseProductId } from "../utils/parseProductId";

function BackLink() {
  return (
    <Link to="/products" className="back-link">
      <span aria-hidden="true">←</span> Back to the menu
    </Link>
  );
}

interface ProductDetailsProps {
  id: number | null;
}

function ProductDetails({ id }: ProductDetailsProps) {
  const { product, loading, error, notFound, retry } = useProduct(id);

  if (loading) {
    return (
      <>
        <BackLink />
        <LoadingState message="Getting the dish ready..." />
      </>
    );
  }

  if (notFound) {
    return (
      <>
        <BackLink />
        <ErrorState message="Dish not found." />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <BackLink />
        <ErrorState message="Unable to load this dish." onRetry={retry} />
      </>
    );
  }

  return (
    <>
      <BackLink />
      <article className="details">
        <div className="details-image">
          <img src={product.thumbnail} alt={product.title} onError={(event) => { event.currentTarget.style.display = "none"; }} />
          <div className="food-placeholder" aria-hidden="true">
            <span>{formatCategory(product.category)}</span>
            <strong>{product.title}</strong>
            <small>{product.region}</small>
          </div>
        </div>
        <div className="details-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {formatCategory(product.category)}</p>
          <h1>{product.title}</h1>
          <p className="details-author">A regional favourite from <strong>{product.region}</strong></p>
          <p className="details-description">{product.description}</p>
          <div className="details-purchase">
            <div><span className="note-label">PER SERVING</span><strong>{formatPrice(product.price)}</strong></div>
            <span className="rating">&#9733; {formatRating(product.rating)} <small>community rating</small></span>
          </div>
          <dl className="details-list">
            <dt>Ready in</dt><dd>{product.prepTime} minutes</dd>
            <dt>Spice level</dt><dd>{product.spiceLevel}</dd>
            <dt>Diet</dt><dd>{product.dietary}</dd>
            <dt>Key ingredients</dt><dd>{product.ingredients.join(", ")}</dd>
          </dl>
        </div>
      </article>
    </>
  );
}

export function ProductDetailsPage() {
  const { id } = useParams();

  // key={id}: React creates a fresh component (and fresh state) when the URL id changes
  return <ProductDetails key={id} id={parseProductId(id)} />;
}
