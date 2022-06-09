import React from "react";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./styles.css";
import Table from "../../../components/Table/Table";
import { getTableHeaders } from "../../../commons/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  searchPatientsAdmissions,
  updatePatientAdmission,
} from "../../../redux/actions/patientsAdmissions";
import CustomModal from "../../../components/CustomModal/CustomModal";
import { searchReferrals } from "../../../redux/actions/referrals";
import { searchHospitalrooms } from "../../../api";

const initialStateFormLbp2 = {
  lbpForm2: "",
};

const initialStateFormLbp1 = {
  lbpForm1: "",
};

const NurseInfirmaryPatientAdmission = () => {
  let tab;
  let dateValue = new Date();
  let stepOneTable;
  let stepTwoTable;
  let stepThreeDropdown;
  let stepFourInput;
  let pbo;

  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const [formLbp2, setFormLbp2] = useState(initialStateFormLbp2);
  const [formLbp1, setFormLbp1] = useState(initialStateFormLbp1);
  const [valueLbp2, setValueLbp2] = useState();
  const [valueLbp1, setValueLbp1] = useState();

  const [referralId, setReferralId] = useState();
  const [referralDiagnosis, setReferralDiagnosis] = useState();
  const [hospitalRoomId, setHospitalRoomId] = useState();
  const [napomena, setNapomena] = useState();

  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);

  useEffect(() => {
    dispatch(searchPatientsAdmissions(dateValue));
    dispatch(searchHospitalrooms(pbo));
  }, []);

  const [isClicked1, setClicked1] = useState(true);
  const [isClicked2, setClicked2] = useState(false);

  const toggleClass1 = () => {
    if (!isClicked1) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
    setValueLbp1("");
  };

  const toggleClass2 = () => {
    setValueLbp2("");
    if (!isClicked2) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
  };

  const referrals = useSelector((state) => state.referrals);
  const rooms = useSelector((state) => state.rooms);

  const handleChangeLbp = (e) => {
    setFormLbp1({ ...formLbp1, [e.target.name]: e.target.value });
    setValueLbp1(e.target.value);
    setDisable(e.target.value === "");
    dispatch(searchPatientsAdmissions({ ...formLbp1 }, dateValue));
  };

  const handleAcceptAdmission = (key, entry) => {
    dispatch(updatePatientAdmission(entry[0][1], "Realizovan"));
    setClicked2(true);
    setClicked1(false);
    setValueLbp2(entry[1][1]);
  };

  const handleCancelAdmission = (key, entry) => {
    dispatch(updatePatientAdmission(entry[0][1], "Otkazan"));
  };

  const handleRowClick = (entry) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchReferrals({ ...formLbp2 }, "Stacionar", "Nerealizovan"));
  };

  const handleChange = (e) => {
    setFormLbp2({ ...formLbp2, [e.target.name]: e.target.value });
    setValueLbp2(e.target.value);
    setDisable(e.target.value === "");
  };

  const handleChooseReferral = (key, entry) => {
    setStepOne(false);
    setReferralDiagnosis(entry[4][1]);
    setReferralId(entry[0][1]);
    setStepTwo(true);
  };

  const handleChooseRoom = (key, entry) => {
    setStepTwo(false);
    setHospitalRoomId(entry[0][1]);
    setStepThree(true);
  };

  const handleChangeNapomena = (e) => {
    setNapomena(e.target.value);
  };

  const demoPatientsAdmissions = [
    {
      id: 1,
      lbpNumber: 1234,
      departmentId: 321,
      datum: new Date("December 30, 2019 17:30:00").getTime(),
      pacijent: "Milan Milanovic",
      statusPrijemZakazaniPacijent: "Zakazan",
      komentarStacionar: "komentar",
    },
    {
      id: 2,
      lbpNumber: 12345,
      departmentId: 3210,
      datum: new Date("December 30, 2021 17:30:00").getTime(),
      pacijent: "Petar Petrovic",
      statusPrijemZakazaniPacijent: "stat",
      komentarStacionar: "komentar",
    },
  ];

  const demoUnrealizedReferrals = [
    {
      id: 1,
      lekar: "Ivan Ivanovic",
      datum: new Date("May 25, 2022 17:30:00").getTime(),
      odeljenje: "odeljenje",
      dijagnoza: "dijagnoza",
      odabir: "odabir",
    },
    {
      id: 2,
      lekar: "Ivan Ivanovic",
      datum: new Date("May 26, 2022 17:30:00").getTime(),
      odeljenje: "XX",
      dijagnoza: "dijagnoza",
      odabir: "odabir",
    },
    {
      id: 3,
      lekar: "Ivan Ivanovic",
      datum: new Date("December 30, 2018 17:30:00").getTime(),
      odeljenje: "odeljenje",
      dijagnoza: "dijagnoza",
      odabir: "odabir",
    },
  ];

  const demoHospitalRoom = [
    {
      id: 1,
      departmentId: 1234,
      roomNumber: 321,
      roomName: "Soba 1",
      capacity: 20,
      occupancy: 10,
      odaberiSobu: "komentar",
    },
    {
      id: 2,
      departmentId: 4321,
      roomNumber: 12,
      roomName: "Soba 2",
      capacity: 10,
      occupancy: 5,
      odaberiSobu: "komentar",
    },
  ];

  if (stepOne) {
    stepOneTable = (
      <div>
        <form onSubmit={handleSubmit} className="form-custom familyFix">
          <br></br>
          <div className="form-group-custom">
            <input
              className="margin-right"
              placeholder="LBP"
              onChange={handleChange}
              name="lbp"
              type="text"
              value={valueLbp2}
            />
            <button
              disabled={!valueLbp2}
              /*               disabled={disable}
               */ onClick={handleSubmit}
              className={` ${disable ? "disabled" : ""}`}
              type="button"
            >
              Pretrazi
            </button>
          </div>
        </form>
        {/*         {referrals.length > 0 && ( */}
        {demoUnrealizedReferrals.length > 0 && (
          <Table
            headers={getTableHeaders("unrealizedReferrals")}
            tableContent={demoUnrealizedReferrals}
            /*              tableContent={referrals}
             */
            handleChooseReferral={handleChooseReferral}
            handleRowClick={handleRowClick}
          />
        )}
        {/*         {referrals.length === 0 && ( */}
        {demoUnrealizedReferrals.length === 0 && (
          <div>
            <CustomModal
              title="Greska"
              info="Lista nerealizovanih uputa za stacionar je prazna"
              isSuccess={false}
              id="false"
            />
          </div>
        )}
      </div>
    );
  } else {
    stepOneTable = (
      <div>
        <p>
          Izabrali ste <b>uput</b>: ID uputa: {referralId}, Uputna dijagnoza:{" "}
          {referralDiagnosis}.
        </p>
        <hr></hr>
      </div>
    );
  }

  if (stepTwo) {
    stepTwoTable = (
      <div>
        <Table
          headers={getTableHeaders("hospitalRoom")}
          tableContent={demoHospitalRoom}
          /*              tableContent={rooms}
           */
          handleChooseRoom={handleChooseRoom}
          handleRowClick={handleRowClick}
        />
      </div>
    );
  } else if (true) {
    stepTwoTable = (
      <div>
        <p>Izabrali ste bolnicku sobu, ID sobe: {hospitalRoomId}.</p>
        <hr></hr>
      </div>
    );
  }

  if (stepThree) {
    stepThreeDropdown = <div></div>;
  } else {
    stepThreeDropdown = <div>Izabrali ste doktora: {}.</div>;
  }

  if (stepFour) {
    stepFourInput = (
      <div>
        <input
          className="margin-right"
          placeholder="Napomena"
          onChange={handleChangeNapomena}
          name="napomena"
          type="text"
          value={napomena}
        />
        <button
          disabled={!valueLbp2}
          /*               disabled={disable}
           */ onClick={handleSubmit}
          className={` ${disable ? "disabled" : ""}`}
          type="button"
        >
          Prijem pacijenta
        </button>
      </div>
    );
  }

  if (isClicked1) {
    tab = (
      <div>
        <form className="form-custom familyFix">
          <br></br>
          <div className="form-group-custom">
            <input
              className="margin-right"
              placeholder="LBP"
              onChange={handleChangeLbp}
              name="lbpForm"
              type="text"
              value={valueLbp1}
            />
          </div>
        </form>
        <Table
          headers={getTableHeaders("patientsAdmissions")}
          tableContent={demoPatientsAdmissions}
          /*              tableContent={patientsAdmissions}
           */
          handleRowClick={handleRowClick}
          handleAcceptAdmission={handleAcceptAdmission}
          handleCancelAdmission={handleCancelAdmission}
        />
      </div>
    );
  } else {
    tab = [stepOneTable, stepTwoTable, stepThreeDropdown, stepFourInput];
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
