import React from "react";
import AdminLayout from "../layout/AdminLayout";
import WelcomeSection from "../components/admin/WelcomeSection";

function Admin() {
  return (
    <AdminLayout>
      <div class="t-dashboard-contant p-4">
        <WelcomeSection />

      </div>
    </AdminLayout>
  );
}

export default Admin;
