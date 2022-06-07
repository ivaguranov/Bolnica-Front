import React from "react";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./styles.css";

const NurseInfirmaryPatientAdmission = () => {
  let tab;

  const [isClicked1, setClicked1] = useState(true);
  const [isClicked2, setClicked2] = useState(false);

  const toggleClass1 = () => {
    if (!isClicked1) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
  };

  const toggleClass2 = () => {
    if (!isClicked2) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
  };

  if (isClicked1) {
    tab = <div></div>;
  } else {
    tab = <div></div>;
  }

  return (
    <div style={{ marginLeft: "15%" }}>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("nurseinfirmary", 6)} />
      </div>
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <button
            className={` ${isClicked1 ? "isActive" : "inactive"}`}
            onClick={toggleClass1}
          >
            Zakazani pacijenti
          </button>
        </li>
        <li className="nav-item">
          <button
            className={` ${isClicked2 ? "isActive" : "inactive"}`}
            onClick={toggleClass2}
          >
            Prijem
          </button>
        </li>
      </ul>
      {tab}
    </div>
  );
};

export default NurseInfirmaryPatientAdmission;
