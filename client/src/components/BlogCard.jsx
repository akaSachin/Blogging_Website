import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="card">
      <img src={blog.image} alt={blog.title} />

      <div className="card-body">
        <h2>{blog.title}</h2>

        <p>
          <strong>Author:</strong> {blog.author}
        </p>

        <p>
          {blog.content.length > 120
            ? blog.content.substring(0, 120) + "..."
            : blog.content}
        </p>

        <Link to={`/blog/${blog.id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;