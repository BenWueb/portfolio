import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <section className="articles-container" id="articles">
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
          <Link className="link" to="/Designing-a-Website-Navigation-Menu">
            <div className="article-card">
              <h5>Designing a Website Navigation Menu</h5>
              <p>
                When it comes to designing a website, one of the most crucial
                elements to consider is navigation. A website's navigation is
                the means by which visitors move around your site, finding the
                content they need and interacting with your brand.
              </p>
            </div>
          </Link>
          <Link className="link" to="/creating-an-effective-landing-page">
            <div className="article-card">
              <h5>Creating an Effective Landing Page</h5>
              <p>
                Creating an effective landing page is a crucial element in the
                success of any online marketing campaign. A landing page is the
                first impression that a potential customer has of your brand and
                it can make or break a sale.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Articles;
