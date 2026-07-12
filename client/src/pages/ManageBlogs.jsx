import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

function ManageBlogs() {

    const [blogs, setBlogs] = useState([]);

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

    const deleteBlog = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this blog?"
        );

        if (!confirmDelete) return;

        try {

            await API.delete(`/blogs/${id}`);

            fetchBlogs();

        } catch (err) {
            console.log(err);
        }

    };

    return (
<AdminLayout>
        <div className="container mt-4">

            <h2 className="mb-4">
                Manage Blogs
            </h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Image</th>

                        <th>Title</th>

                        <th>Author</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        blogs.map(blog => (

                            <tr key={blog.id}>

                                <td>{blog.id}</td>

                                <td>

                                    <img
                                        src={blog.image}
                                        alt=""
                                        width="80"
                                    />

                                </td>

                                <td>{blog.title}</td>

                                <td>{blog.author}</td>

                                <td>

                                    <Link
                                        to={`/edit/${blog.id}`}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteBlog(blog.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
</AdminLayout>
    );

}

export default ManageBlogs;