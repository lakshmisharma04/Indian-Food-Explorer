import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link to="/products" className="logo">
            <span className="logo-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M13 7v10m5-10v10m5-10v10M13 14h10m-5 3v16M31 7v9c0 3-2 5-4 5V7m2 14v10" />
              </svg>
            </span>
            <span className="logo-copy"><strong>Indian Food Explorer</strong><small>Local favourites, all in one place</small></span>
          </Link>
          <Link to="/products" className="header-link">Explore the menu <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
