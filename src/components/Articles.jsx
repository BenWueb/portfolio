import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <section className="articles-container" id="articles">
        <h2 className="heading articles-section-header">Articles</h2>
        <div className="article-card-container">
          <Link className="link" to="article/guide_to_website_accessibility">
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
          <Link
            className="link"
            to="/content-optimization-for-search-engine-optimization"
          >
            <div className="article-card">
              <h5>Content Optimization for SEO</h5>
              <p>
                The importance of website content cannot be overstated. In
                today's digital world, the content on your website is one of the
                most important factors that determine the success of your online
                business.
              </p>
            </div>
          </Link>
          <Link className="link" to="/article/website_ttl_optimization">
            <div className="article-card">
              <h5>Website TTL Optimization</h5>
              <p>
                In today's fast-paced digital world, website load times have
                become an essential factor in the success of any website.
              </p>
            </div>
          </Link>
          <Link
            className="link"
            to="/article/testing_&_debugging_best_practices"
          >
            <div className="article-card">
              <h5>Testing & Debugging Best Practices</h5>
              <p>
                Building a website can be an exciting experience, but it is
                equally important to test and debug it before launching it.
                Testing and debugging are critical parts of the website
                development process as they help identify issues and ensure the
                site is functional, user-friendly, and secure.
              </p>
            </div>
          </Link>
          <Link className="link" to="/article/optimizing_websites_for_mobile">
            <div className="article-card">
              <h5>Optimizing Websites for Mobile</h5>
              <p>
                In today's digital age, more people are accessing the internet
                through mobile devices than ever before. As a result, it's
                crucial for businesses to optimize their websites for mobile
                devices to provide users with a seamless experience, whether
                they're browsing on a smartphone, tablet, or other mobile
                device.
              </p>
            </div>
          </Link>
          <Link className="link" to="/article/website_hosting_options">
            <div className="article-card">
              <h5>Website Hosting Options</h5>
              <p>
                When it comes to website hosting, there are a variety of options
                to choose from. In this guide, we'll explore some of the most
                common website hosting options, including two popular hosting
                providers, Vercel and Netlify.
              </p>
            </div>
          </Link>
          <Link className="link" to="/article/benefits_of_a_cdn">
            <div className="article-card">
              <h5>Benefits of a CDN</h5>
              <p>
                In today's digital age, a website's speed and reliability are of
                utmost importance. Slow-loading websites can result in high
                bounce rates, reduced traffic, and a negative impact on your
                brand's reputation.
              </p>
            </div>
          </Link>
          <Link className="link" to="/article/optimizing_website_typography">
            <div className="article-card">
              <h5>Optimizing Website Typography</h5>
              <p>
                When it comes to creating a website, typography is one of the
                most important elements to consider. Typography refers to the
                style, size, and arrangement of text on a website.
              </p>
            </div>
          </Link>
          <Link className="link" to="/article/meta_tags_in_seo">
            <div className="article-card">
              <h5>Meta Tags in SEO</h5>
              <p>
                Meta tags play a vital role in search engine optimization (SEO)
                and are essential for helping search engines understand the
                content of a website.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Articles;
