import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../redux/actions/employee";
import "./styles.css";

const EmployeePreview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const employees = useSelector((state) => state.employees);

  const linksSidebar = [
    {
      id: 1,
      text: "Pocetna",
      path: "/",
      icon: "fa-solid fa-chart-pie",
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/pacijenti",
      icon: "fa-solid fa-wheelchair",
      dividerAfter: true,
    },
    {
      id: 3,
      text: "Profil",
      path: "/profil",
      icon: "fa-solid fa-user-doctor",
      isActive: true,
    },
  ];

  const linksHeader = {
    avatarUrl: "nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
    day: format(new Date(), "d"),
    date: format(new Date(), "d MMMM, yyyy"),
  };

  const headers = ["Name", "Surname", "Address", "City", "Contact"];

  const tableContent = [
    {
      name: "Marija",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Marko",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
  ];
  const handleClick = (id) => {
    console.log("I have been clicked");
  };

  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={linksSidebar} />
      </div>

      <div style={{ marginLeft: "15%" }}>
        <Header
          avatarUrl={linksHeader.avatarUrl}
          welcomeMsg={linksHeader.welcomeMsg}
          userName={linksHeader.userName}
          userTitle={linksHeader.userTitle}
          day={linksHeader.day}
          date={linksHeader.date}
        />

        {/* <div class="form-group pull-right">
          <input
            type="text"
            class="search form-control"
            placeholder="Search..."
          >
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </input>
        </div> */}
        <form className="example myInline">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div>
          <h1 className="myTitle">Zaposleni</h1>
        </div>
        <Table
          headers={headers}
          tableContent={tableContent}
          handleClick={handleClick}
        />
        <br />
      </div>
    </div>
  );
};

export default EmployeePreview;