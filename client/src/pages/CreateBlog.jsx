import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreateBlog() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    image: "",
    content: "",
  });

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/blogs", blog);
      alert("Blog Created Successfully!");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={blog.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={blog.author}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={blog.image}
          onChange={handleChange}
          required
        />

        <textarea
          rows="8"
          name="content"
          placeholder="Write your blog..."
          value={blog.content}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;