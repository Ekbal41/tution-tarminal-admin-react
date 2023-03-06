import React from "react";
import Navbar from "../components/admin/Navbar";
import Sidebar from "../components/admin/Sidebar";
import { useState } from "react";
function AdminLayout({ children }) {
  const [notOpen, setNotOpen] = useState(true);
  return (
    <>
      <Navbar setNotOpen={setNotOpen} notOpen={notOpen} />
      <div className="">
        <Sidebar notOpen={notOpen} />
        {children}
      </div>
      <div>footer</div>
    </>
  );
}

export default AdminLayout;
