import React, { useState, useEffect } from "react";
import Header from "../../components/shared/dashboardHeader";
import Backdrop from "../../components/shared/backdrop";
// import Footer from "../../components/ui/footer";
import Sidebar from "../../components/shared/dashboardSideBar";
import DashboardHeader from "../../components/shared/dashboardMainHeader";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";

// import { useRouter } from "next/router";

const DashboardSettingsLayout = () => {
  const [open, setOpen] = useState(false);

  // const router = useRouter();

  useEffect(
    () => {
      setOpen(false);

      document.documentElement.classList.remove("_fixed");
      document.body.classList.remove("_fixed");
    },
    [
      // router.pathname
    ]
  );

  return (
    <div className={`${styles.layoutt}`}>
      <Sidebar isOpen={open} />
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />
      <DashboardHeader />
      <main className={`${styles.main}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardSettingsLayout;
