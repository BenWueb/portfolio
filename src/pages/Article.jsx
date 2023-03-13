import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function ArticleTest({ article }) {
  const [post, setPost] = useState("");

  const params = useParams();
  const articlePath = params.postName.replaceAll("_", "");

  useEffect(() => {
    fetch(`/posts/${articlePath}.md`)
      .then((res) => res.text())
      .then((text) => setPost(text));
  }, []);

  return (
    <>
      <ReactMarkdown
        className="article-container"
        children={post}
      ></ReactMarkdown>
    </>
  );
}
export default ArticleTest;
