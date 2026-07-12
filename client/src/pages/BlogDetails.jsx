import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    try {
      const res = await API.get(`/blogs/${id}`);
      setBlog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBlog = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/blogs/${id}`);
      alert("Blog Deleted Successfully");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (!blog) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img src={blog.image} alt={blog.title} />

      <h1>{blog.title}</h1>

      <h4>Author : {blog.author}</h4>

      <p>{blog.content}</p>

      <br />

      <Link to={`/edit/${blog.id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={deleteBlog}>Delete</button>
    </div>
  );
}

export default BlogDetails;