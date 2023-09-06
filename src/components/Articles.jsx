import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

function Articles() {
  return (
    <div>
      <section className="articles-container" id="articles">
        <h2 className="heading ">Articles</h2>
        <div className="article-card-container">
          <ArticleCard
            title="A Guide to Website Accessibility"
            desc="Website accessibility is a critical aspect of web development
                that ensures equal access to digital content for all users."
          />
          <ArticleCard
            title="Creating Effective CTA Buttons"
            desc="Call-to-action (CTA) buttons are a critical part of any
            marketing or advertising campaign. They are designed to
            encourage users to take a specific action, such as signing up
            for a newsletter, purchasing a product, or scheduling a demo."
          />
          <ArticleCard
            title="Designing a Website Navigation Menu"
            desc="When it comes to designing a website, one of the most crucial
            elements to consider is navigation. A website's navigation is
            the means by which visitors move around your site, finding the
            content they need and interacting with your brand."
          />
          <ArticleCard
            title="Creating an Effective Landing Page"
            desc="Creating an effective landing page is a crucial element in the
            success of any online marketing campaign. A landing page is the
            first impression that a potential customer has of your brand and
            it can make or break a sale."
          />
          <ArticleCard
            title="Content Optimization for SEO"
            desc=" The importance of website content cannot be overstated. In
            today's digital world, the content on your website is one of the
            most important factors that determine the success of your online
            business."
          />
          <ArticleCard
            title="Website TTL Optimization"
            desc=" In today's fast-paced digital world, website load times have
            become an essential factor in the success of any website."
          />
          <ArticleCard
            title="Testing and Debugging Best Practices"
            desc="Building a website can be an exciting experience, but it is
            equally important to test and debug it before launching it.
            "
          />
          <ArticleCard
            title="Optimizing Websites for Mobile"
            desc=" It's
            crucial for businesses to optimize their websites for mobile
            devices to provide users with a seamless experience, whether
            they're browsing on a smartphone, tablet, or other mobile
            device."
          />
          <ArticleCard
            title="Website Hosting Options"
            desc="  When it comes to website hosting, there are a variety of options
            to choose from. In this guide, we'll explore some of the most
            common website hosting options, including two popular hosting
            providers, Vercel and Netlify."
          />
          <ArticleCard
            title="Benefits of a CDN"
            desc=" In today's digital age, a website's speed and reliability are of
            utmost importance. Slow-loading websites can result in high
            bounce rates, reduced traffic, and a negative impact on your
            brand's reputation."
          />
          <ArticleCard
            title="Optimizing Website Typography"
            desc=" When it comes to creating a website, typography is one of the
            most important elements to consider. Typography refers to the
            style, size, and arrangement of text on a website."
          />
          <ArticleCard
            title="Meta Tags in SEO"
            desc="Meta tags play a vital role in search engine optimization (SEO)
            and are essential for helping search engines understand the
            content of a website."
          />
        </div>
      </section>
    </div>
  );
}
export default Articles;
