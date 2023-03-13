import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function ArticleTest({ article }) {
  const [post, setPost] = useState("");

  const params = useParams();

  useEffect(() => {
    fetch(`/src/posts/${params.postName}.md`)
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
