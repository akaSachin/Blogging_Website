import AdminLayout from "../components/AdminLayout";
import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <AdminLayout>

            <h2 className="mb-4">
                Dashboard
            </h2>

            <div className="row">

                <div className="col-md-4">

                    <div className="card shadow p-4 text-center">

                        <h1>25</h1>

                        <h5>Total Blogs</h5>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow p-4 text-center">

                        <h1>10</h1>

                        <h5>Total Users</h5>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow p-4 text-center">

                        <h1>5</h1>

                        <h5>Categories</h5>

                    </div>

                </div>

            </div>

            <div className="mt-4">

                <Link
                    to="/create"
                    className="btn btn-dark me-3"
                >
                    Create Blog
                </Link>

                <Link
                    to="/manage"
                    className="btn btn-outline-dark"
                >
                    Manage Blogs
                </Link>

            </div>

        </AdminLayout>

    );

}

export default Dashboard;