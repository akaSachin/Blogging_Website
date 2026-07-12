import { useEffect, useState } from "react";
import API from "../services/api";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

   return (
  <>
    <div className="hero">
      <h1>Welcome to BlogIt</h1>
      <p>Read, Write and Share Amazing Stories</p>
    </div>

    <SearchBar search={search} setSearch={setSearch} />

    <div className="grid">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))
      ) : (
        <h2>No Blogs Found</h2>
      )}
    </div>
  </>
  );
}

export default Home;