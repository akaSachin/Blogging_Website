import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100">

      <h3 className="mb-4 text-center">
        Blog Admin
      </h3>

      <div className="d-grid gap-2">

        <Link
          to="/dashboard"
          className="btn btn-outline-light"
        >
          Dashboard
        </Link>

        <Link
          to="/create"
          className="btn btn-outline-light"
        >
          Create Blog
        </Link>

        <Link
          to="/manage"
          className="btn btn-outline-light"
        >
          Manage Blogs
        </Link>

      </div>

    </div>
  );
}

export default AdminSidebar;