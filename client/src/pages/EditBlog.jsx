import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    image: "",
    content: "",
  });

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const res = await API.get(`/blogs/${id}`);
      setBlog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/blogs/${id}`, blog);
      alert("Blog Updated Successfully!");
      navigate(`/blog/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Edit Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          value={blog.author}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          value={blog.image}
          onChange={handleChange}
          required
        />

        <textarea
          rows="8"
          name="content"
          value={blog.content}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;