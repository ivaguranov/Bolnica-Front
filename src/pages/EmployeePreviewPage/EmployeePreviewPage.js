import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployee,
  getEmployees,
  searchEmployees,
} from "../../redux/actions/employee";
import "./styles.css";
import { BiSearchAlt } from "react-icons/bi";
import { deletePatient } from "../../redux/actions/patient";
import { useNavigate } from "react-router";
import { getSidebarLinks } from "../../commons/sidebarLinks";

const EmployeePreview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const [value, setValue] = useState("");

  const employees = useSelector((state) => state.employees);

  const headerProps = {
    avatarUrl: "../nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
    day: format(new Date(), "d"),
    date: format(new Date(), "d MMMM, yyyy"),
  };

  const headers = [
    {
      key: "name",
      value: "Ime",
    },
    {
      key: "surname",
      value: "Prezime",
    },
    // {
    //   key: "dob",
    //   value: "Datum rodjenja",
    // },
    {
      key: "lbz",
      value: "LBZ",
    },
    {
      key: "contact",
      value: "Kontakt",
    },
    {
      key: "email",
      value: "Email",
    },
    {
      key: "title",
      value: "Titula",
    },
    {
      key: "profession",
      value: "Zanimanje",
    },
    {
      key: "department",
      value: "Odeljenje",
    },
  ];

  const handleClick = (lbz) => {
    dispatch(deleteEmployee(lbz));
  };

  const handleEdit = (lbz) => {
    navigate(`/admin/edit-employee/${lbz}`);
  };

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchEmployees(value));
  }

  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("admin", 2)} />
      </div>

      <div style={{ marginLeft: "15%" }}>
        <Header
          avatarUrl={headerProps.avatarUrl}
          welcomeMsg={headerProps.welcomeMsg}
          userName={headerProps.userName}
          userTitle={headerProps.userTitle}
          day={headerProps.day}
          date={headerProps.date}
        />
        <form className="example myInline">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={handleOnChange}
          />
          <button type="submit" onClick={handleSubmit}>
            <BiSearchAlt />
          </button>
        </form>
        <br />
        <br />
        <div>
          <h1 className="myTitle">Zaposleni</h1>
        </div>
        {employees.length > 0 && (
          <Table
            headers={headers}
            tableContent={employees}
            handleClick={handleClick}
            handleEdit={handleEdit}
            tableType="employees"
          />
        )}
        <br />
      </div>
    </div>
  );
};

export default EmployeePreview;
