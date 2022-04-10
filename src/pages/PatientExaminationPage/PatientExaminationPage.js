import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaHome, FaUser, FaUserInjured, FaPlusCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { Button } from "reactstrap";
import "./styles.css";
import ExaminationForm from "../../components/ExaminationForm/ExaminationForm";
import MedicalRecord from "../../components/MedicalRecord/MedicalRecord";
import { useDispatch } from "react-redux";
import { createRecord, getRecord } from "../../redux/actions/records";
import { MdCalendarToday } from "react-icons/md";

const PatientExamination = () => {
  const location = useLocation();
  const [patientId, setPatientId] = useState();
  const [isExamination, setIsExamination] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    setPatientId(pathParts[pathParts.length - 1]);
    dispatch(getRecord(pathParts[pathParts.length - 1]));
  }, []);

  if (patientId) console.log(patientId);

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

  const saveRecord = (formData) => {
    dispatch(createRecord(formData));
    navigate("/");
  };

  const swapTabs = () => {
    setIsExamination(!isExamination);
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
        <div className="tabButtons">
          <Button color="primary" outline={!isExamination} onClick={swapTabs}>
            Zdravstveni pregled
          </Button>
          <Button color="primary" outline={isExamination} onClick={swapTabs}>
            Zdravstveni karton
          </Button>
        </div>
        <div className="main">
          {isExamination ? (
            <ExaminationForm saveRecord={saveRecord} />
          ) : (
            <MedicalRecord />
          )}
        </div>
      </div>
    </>
  );
};

export default PatientExamination;
