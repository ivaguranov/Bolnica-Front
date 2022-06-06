import React from "react";
import SingleAppointment from "../SingleAppointment/SingleAppointment";
import "./styles.css";

const ScheduledAppointments = ({ appointments }) => {
  return (
    <div>
      <div className="title">Današnji pacijenti</div>
      {appointments.map((appointment) => {
        return (
          <SingleAppointment
            appointment={appointment}
            key={appointment.zakazaniPregledId}
          />
        );
      })}
    </div>
  );
};

export default ScheduledAppointments;
