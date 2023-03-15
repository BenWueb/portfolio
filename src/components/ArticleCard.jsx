import { Link } from "react-router-dom";

function ArticleCard({ title, desc }) {
  return (
    <>
      <Link
        className="link"
        to={`/article/${title.replaceAll(" ", "_").toLowerCase()}`}
      >
        <div className="article-card">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </Link>
    </>
  );
}
export default ArticleCard;
