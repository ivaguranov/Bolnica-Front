import React from "react";
import "./styles.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaChartPie, FaWheelchair, FaUser } from "react-icons/fa";

const AdminHomepage = () => {
  const links = [
    {
      id: 1,
      text: "Pocetna",
      path: "/",
      icon: <FaChartPie />,
      isActive: true,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/pacijenti",
      icon: <FaWheelchair />,
      dividerAfter: true,
    },
    {
      id: 3,
      text: "Profil",
      path: "/profil",
      icon: <FaUser />,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={links} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <Header
          avatarUrl={"nikolaSlika 1.jpg"}
          welcomeMsg={"Dobro jutro"}
          userName={"Dr. Paun"}
          userTitle={"Kardiolog"}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />
      </div>
    </>
  );
};

export default AdminHomepage;
