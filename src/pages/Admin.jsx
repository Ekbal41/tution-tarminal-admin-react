import React from "react";
import AdminLayout from "../layout/AdminLayout";
import WelcomeSection from "../components/admin/WelcomeSection";
import MembershipNotice from "../components/admin/MembershipNotice";
import ProfileCard from "../components/admin/ProfileCard";
import MiniCard from "../components/admin/MiniCard";
import HomeTrendIcon from "../assets/home-trend-down.svg";

function Admin() {
  return (
    <AdminLayout>
      <div className="t-dashboard-contant p-4">
        <WelcomeSection />
        <MembershipNotice />
        <ProfileCard />
        <div class="row ml-cut-4">
          <MiniCard
            BgColor={"#1890ff"}
            Icon={HomeTrendIcon}
            Cardtext={"Job Aplied"}
            CardCount={6}
          ></MiniCard>
          <MiniCard
            BgColor={"#1890ff"}
            Icon={HomeTrendIcon}
            Cardtext={"Job Aplied"}
            CardCount={6}
          ></MiniCard>
          <MiniCard
            BgColor={"#f4a118"}
            Icon={HomeTrendIcon}
            Cardtext={"Payment"}
            CardCount={6}
          ></MiniCard>
          <MiniCard
            BgColor={"#7cb305"}
            Icon={HomeTrendIcon}
            Cardtext={"Job Canceld"}
            CardCount={6}
          ></MiniCard>
          <MiniCard
            BgColor={"#7cb305"}
            Icon={HomeTrendIcon}
            Cardtext={"Appointed"}
            CardCount={6}
          ></MiniCard>
          <MiniCard
            BgColor={"#e73f3f"}
            Icon={HomeTrendIcon}
            Cardtext={"Job Confurmed"}
            CardCount={6}
          ></MiniCard>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Admin;
