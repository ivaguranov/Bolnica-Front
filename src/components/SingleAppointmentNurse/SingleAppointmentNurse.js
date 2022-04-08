import React from "react";
import "./styles.css";
import { format } from "date-fns";

const SingleAppointmentNurse = ({ props }) => {
  const { id, firstname, lastname, dob, gender, time } = props;

  let age = format(new Date(), "yyyy") - format(dob, "yyyy");
  let appointTime = format(new Date(time), "HH:mm");

  function updateAppointmentStatus(id, data) {
    /*     console.log(data);
    console.log(id); */
  }

  return (
    <div key={`prop-${id}`} className="customClass">
      <div className="d-flex flex-row align-items-center ">
        <div className="appTime">
          <span>{appointTime}</span>
        </div>
        <div className="customContainer">
          <div className="d-flex flex-row justify-content-around appointment">
            <span className="text-dark text1">
              {firstname} {lastname}
            </span>
            <span className="text2">
              {age} {gender}
            </span>
            <div className="d-flex">
              <button
                type="button"
                className="btn customButton1"
                onClick={() => updateAppointmentStatus(id, "Ceka")}
              >
                Čeka
              </button>
              <button type="button" className="btn customButton2">
                Trenutno
              </button>
              <button
                type="button"
                className="btn customButton3"
                onClick={() => updateAppointmentStatus(id, "Otkazano")}
              >
                Otkazano
              </button>
              <button type="button" className="btn customButton4">
                Završeno
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleAppointmentNurse;
