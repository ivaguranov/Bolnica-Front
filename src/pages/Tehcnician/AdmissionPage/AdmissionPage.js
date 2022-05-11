import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReferrals } from "../../../redux/actions/referrals";
import { createLabReport } from "../../../redux/actions/labReports";
import Table from "../../../components/Table/Table";
import { getTableHeaders } from "../../../commons/tableHeaders";
import CustomModal from "../../../components/CustomModal/CustomModal";
import ActionConfirmationModal from "../../../components/ActionConfirmationModal/ActionConfirmationModal";

const initialState = {
  lbp: "",
};

const AdmissionPage = () => {
  const handleRowClick = (entry) => {};

  let tab;
  let labRep;

  const referrals = useSelector((state) => state.referrals);

  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form });
    console.log(form);
    dispatch(getReferrals({ ...form }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setDisable(e.target.value === "");
  };

  const handlecreateLabReport = (key, entry) => {
    console.log(entry[0][1]);
    dispatch(createLabReport(entry[0][1]));
  };

  const demoUnrealizedLabReferrals = [
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      datumPregleda: new Date("December 30, 2018 17:30:00").getTime(),
      odeljenje: "XX",
      spisakAnaliza: "spisak",
      komentar: "komentar",
      kreiraj: "a",
      /*       status: "obradjeno",
       */
    },
    {
      id: 2,
      ime: "Petar",
      prezime: "Markovic",
      datumPregleda: new Date("December 30, 2018 17:30:00").getTime(),

      odeljenje: "YY",
      spisakAnaliza: "spisakAnaliza",
      komentar: "koment",
      kreiraj: "a",

      /*       status: "obradjeno",
       */
    },
    {
      id: 3,
      ime: "Mile",
      prezime: "Miletic",
      datumPregleda: new Date("May 05, 2022 10:30:00").getTime(),
      odeljenje: "ZZ",
      spisakAnaliza: "spisakAnaliza",
      komentar: "koment",
      kreiraj: "a",

      /*       status: "neobradjeno",
       */
    },
  ];

  /*   if (true) {
    labRep = (
      <Table
        headers={getTableHeaders("unrealizedLabReferrals")}
        tableContent={referrals}
        handleClick={handleClick}
        tableType="labReferrals"
      />
    );
  } else {
    labRep = (
      <div>
        <CustomModal
          title="Greska"
          info="Lista neobradjenih uputa je prazna"
          isSuccess={false}
          id="false"
        />
      </div>
    );
  } */

  if (isClicked1) {
    tab = <div></div>;
  } else {
    tab = (
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
            />
            <button
              disabled={disable}
              onClick={handleSubmit}
              className={` ${disable ? "disabled" : ""}`}
              type="button"
            >
              Pretrazi
            </button>
          </div>
        </form>

        {/*  {labRep} */}

        {/*         {referrals.length > 0 && ( */}
        {demoUnrealizedLabReferrals.length > 0 && (
          <Table
            headers={getTableHeaders("unrealizedLabReferrals")}
            tableContent={demoUnrealizedLabReferrals}
            /*              tableContent={referrals}
             */
            handlecreateLabReport={handlecreateLabReport}
            handleRowClick={handleRowClick}
          />
        )}

        {/*         {referrals.length === 0 && ( */}
        {demoUnrealizedLabReferrals.length === 0 && (
          <div>
            <CustomModal
              title="Greska"
              info="Lista neobradjenih uputa je prazna"
              isSuccess={false}
              id="false"
            />
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <Sidebar links={getSidebarLinks("technician", 2)} />

      <div style={{ marginLeft: "15%" }}>
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
              Kreiranje radnog naloga
            </button>
          </li>
        </ul>
        {tab}
      </div>
    </div>
  );
};

export default AdmissionPage;
