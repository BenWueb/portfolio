import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <section className="articles-container">
        <h2>Articles</h2>
        <div className="article-card-container">
          <Link className="link" to="/guide-to-website-accessibility">
            <div className="article-card">
              <h5>A Guide to Website Accessibility</h5>
              <p>
                Website accessibility is a critical aspect of web development
                that ensures equal access to digital content for all users.
              </p>
            </div>
          </Link>
          <Link className="link" to="/creating-effective-cta-buttons">
            <div className="article-card">
              <h5>Creating Effective CTA Buttons</h5>
              <p>
                Call-to-action (CTA) buttons are a critical part of any
                marketing or advertising campaign. They are designed to
                encourage users to take a specific action, such as signing up
                for a newsletter, purchasing a product, or scheduling a demo.{" "}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Articles;
