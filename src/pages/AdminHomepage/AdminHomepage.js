import React from "react";
import "./styles.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaHome, FaUserNurse, FaUser, FaPlusCircle } from "react-icons/fa";

const AdminHomepage = () => {
  const links = [
    {
      id: 1,
      text: "Pocetna",
      path: "/admin",
      icon: <FaHome />,
      isActive: true,
    },
    {
      id: 2,
      text: "Zaposleni",
      path: "/admin/employee-preview",
      icon: <FaUserNurse />,
    },
    {
      id: 2,
      text: "Nov zaposleni",
      path: "/admin/register-employee",
      icon: <FaPlusCircle />,
      dividerAfter: true,
    },
    {
      id: 3,
      text: "Profil",
      path: "/profile",
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
