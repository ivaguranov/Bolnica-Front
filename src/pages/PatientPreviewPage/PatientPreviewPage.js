import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaHome, FaUser, FaUserInjured, FaPlusCircle } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePatient,
  getPatients,
  searchPatients,
} from "../../redux/actions/patient";
const PatientPreview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatients());
  }, []);

  const patients = useSelector((state) => state.patients);
  const [value, setValue] = useState("");

  const links = [
    {
      id: 1,
      text: "Početna",
      path: "/",
      icon: <FaHome />,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/patient-preview",
      icon: <FaUserInjured />,
      isActive: true,
    },
    {
      id: 3,
      text: "Zakazani pregledi",
      path: "/appointments",
      icon: <MdCalendarToday />,
      dividerAfter: true,
    },
    {
      id: 4,
      text: "Profil",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  const linksHeader = {
    avatarUrl: "../nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
    day: format(new Date(), "d"),
    date: format(new Date(), "d MMMM, yyyy"),
  };

  const headers = [
    {
      key: "ime",
      value: "Ime",
    },
    {
      key: "prezime",
      value: "Prezime",
    },
    {
      key: "kontaktTelefon",
      value: "Kontakt",
    },
    {
      key: "email",
      value: "Email",
    },
    {
      key: "zanimanje",
      value: "Zanimanje",
    },
    {
      key: "lbp",
      value: "LBP",
    },
  ];

  const handleClick = (id) => {
    dispatch(deletePatient(id));
    console.log("I have been clicked");
  };

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchPatients(value));
  }
  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={links} />
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
          <h1 className="myTitle">Pacijenti</h1>
        </div>
        {patients && (
          <Table
            headers={headers}
            tableContent={patients}
            handleClick={handleClick}
          />
        )}
        <br />
      </div>
    </div>
  );
};
export default PatientPreview;
