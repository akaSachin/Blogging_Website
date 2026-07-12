import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-2 p-0">

                    <AdminSidebar />

                </div>

                <div className="col-md-10">

                    <div className="p-4">

                        {children}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminLayout;