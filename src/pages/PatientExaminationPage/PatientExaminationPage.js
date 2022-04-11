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
import { useDispatch, useSelector } from "react-redux";
import { createRecord, getRecord } from "../../redux/actions/records";
import { MdCalendarToday } from "react-icons/md";
import { getExaminations } from "../../redux/actions/examinations";
import { getPatients } from "../../redux/actions/patient";

const PatientExamination = () => {
  const location = useLocation();
  const [patientId, setPatientId] = useState();
  const [isExamination, setIsExamination] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const doctor = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(doctor);
    const pathParts = location.pathname.split("/");
    setPatientId(pathParts[pathParts.length - 1]);
    // dispatch(getRecord(pathParts[pathParts.length - 1]));
    dispatch(getPatients());
  }, []);

  const examinations = useSelector((state) => state.examinations);
  const patients = useSelector((state) => state.patients);
  console.log(examinations);

  if (patients.length > 0) {
    console.log(patients);
    dispatch(getExaminations(patients[1].lbp));
  }

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
    dispatch(
      createRecord({
        ...formData,
        lbp: "db5096cc-b01e-4d7e-8e93-67e52ee87bb7",
        zaposleniId: "a5be48ed-9ed8-465f-94c1-0ddc00b60326",
        sadasnjaBolest: null,
      })
    );
    // navigate("/");
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
