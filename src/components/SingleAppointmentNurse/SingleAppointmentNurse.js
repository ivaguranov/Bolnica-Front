import React from "react";
import "./styles.css";
import { format } from "date-fns";
import { useDispatch } from "react-redux";

const SingleAppointmentNurse = ({ props, updateAppointmentStatus }) => {
  const { id, firstname, lastname, dob, gender, time } = props;

  let age = format(new Date(), "yyyy") - format(dob, "yyyy");
  let appointTime = format(new Date(time), "HH:mm");

  const dispatch = useDispatch();

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
                onClick={() => updateAppointmentStatus(id, "ZAKAZANO")}
              >
                Čeka
              </button>
              <button type="button" className="btn customButton2">
                Trenutno
              </button>
              <button
                type="button"
                className="btn customButton3"
                onClick={() => updateAppointmentStatus(id, "OTKAZANO")}
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
