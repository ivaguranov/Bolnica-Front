import React, { useState } from "react";
import Table from "../Table/Table";
import { Button } from "reactstrap";

const MedicalRecord = ({ record, diseases, examinations }) => {
  const dob = new Date(record.pacijent.datumRodjenja);
  const stringDate = dob.toLocaleDateString();
  const [isExamination, setIsExamination] = useState(true);

  const alergies = ["polen", "macja dlaka", "mleko"];
  const vaccines = ["covid19", "tetanus"];

  const headers = [
    {
      key: "datum",
      value: "Datum",
    },
    {
      key: "objektivniNalaz",
      value: "Objektivni nalaz",
    },
  ];

  const headers2 = [
    {
      key: "dijagnoza",
      value: "Dijagnoza",
    },
    {
      key: "pocetak",
      value: "Pocetak",
    },
    {
      key: "zavrsetak",
      value: "Zavrsetak",
    },
    {
      key: "rezultatLecenja",
      value: "Rezultat lecenja",
    },
    {
      key: "tekuceStanje",
      value: "Tekuce stanje",
    },
    {
      key: "validanOd",
      value: "Validan od",
    },
    {
      key: "validanDo",
      value: "Validan do",
    },
  ];

  const handleClick = () => {
    console.log("Cao");
  };

  const swapTabs = () => {
    setIsExamination(!isExamination);
  };

  return (
    <>
      <p className="form-section-heading">Osnovni zdravsteni podaci</p>
      <div>
        <div className="patient-info-custom">
          <div className="patient-personal-info">
            <p className="patient-info-text">Ime: {record.pacijent.ime}</p>
            <p className="patient-info-text">
              Prezime: {record.pacijent.prezime}
            </p>
            <p className="patient-info-text">Datum rodjena: {stringDate}</p>
            <p className="patient-info-text">
              Alergije: {alergies.map((alergy) => `${alergy} `)}
            </p>
          </div>
          <div className="patient-other-info">
            <p className="patient-info-text">
              Krvna grupa: {record.krvnaGrupa}
            </p>
            <p className="patient-info-text">RH faktor: {record.rhFaktor}</p>
            <p className="patient-info-text">
              Vakcine: {vaccines.map((vaccine) => `${vaccine} `)}
            </p>
          </div>
        </div>
      </div>
      {isExamination && examinations.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija lekarskih pregleda{" "}
            <Button
              color="primary"
              outline={!isExamination}
              onClick={swapTabs}
              style={{ marginLeft: "30px" }}
            >
              Istorija bolesti
            </Button>
          </p>
          <Table
            headers={headers}
            tableContent={examinations}
            handleClick={handleClick}
            tableType="examinations"
          />
        </>
      ) : diseases.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija bolesti{" "}
            <Button
              color="primary"
              outline={isExamination}
              onClick={swapTabs}
              style={{ marginLeft: "30px" }}
            >
              Istorija pregleda
            </Button>
          </p>
          <Table
            headers={headers2}
            tableContent={diseases}
            handleClick={handleClick}
            tableType="diseases"
          />
        </>
      ) : (
        <p className="form-section-heading">
          Trenutno ne postoji istorija pregleda i bolesti
        </p>
      )}
    </>
  );
};

export default MedicalRecord;
