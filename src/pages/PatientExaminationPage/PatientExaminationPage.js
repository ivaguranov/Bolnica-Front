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
import { getDiseases } from "../../redux/actions/diseases";

const PatientExamination = () => {
  const location = useLocation();
  const [lbp, setLbp] = useState();
  const [doctor, setDoctor] = useState();
  const [isExamination, setIsExamination] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const doctorLocal = JSON.parse(localStorage.getItem("loggedUser"));
    if (doctorLocal) {
      setDoctor(doctorLocal);
    } else navigate("/login");
    const pathParts = location.pathname.split("/");
    setLbp(pathParts[pathParts.length - 1]);
    dispatch(getRecord(pathParts[pathParts.length - 1]));
    dispatch(
      getDiseases(pathParts[pathParts.length - 1], { dijagnoza: "string" })
    );
    dispatch(getExaminations(pathParts[pathParts.length - 1]));
  }, []);

  const examinations = useSelector((state) => state.examinations);
  const record = useSelector((state) => state.records);
  const diseases = useSelector((state) => state.diseases);

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

  const saveExamination = (formData) => {
    dispatch(
      createRecord({
        ...formData,
        lbp,
        zaposleniId: doctor.LBZ,
        sadasnjaBolest: null,
      })
    );
    // navigate("/");
    swapTabs();
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
          {record.pacijent && examinations && diseases ? (
            isExamination ? (
              <ExaminationForm
                saveExamination={saveExamination}
                record={record}
              />
            ) : (
              <MedicalRecord
                record={record}
                diseases={diseases}
                examinations={examinations}
              />
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PatientExamination;
