import React from "react";
import SingleAppointmentNurse from "../SingleAppointmentNurse/SingleAppointmentNurse";

const ScheduledAppointmentsNurse = ({
  updateAppointmentStatus,
  appointments,
}) => {
  const scheduledProps = [
    {
      id: 1,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Zakazano",
      time: 10000,
    },
    {
      id: 2,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Trenutno",
      time: 50656565,
    },
    {
      id: 3,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Otkazano",
      time: 50656565,
    },
    {
      id: 4,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Ceka",
      time: 50656565,
    },
    {
      id: 5,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Zavrseno",
      time: 50656565,
    },
  ];
  return (
    <div>
      <div className="title">Današnji pacijenti</div>
      {appointments.map((appointment) => {
        return (
          <SingleAppointmentNurse
            updateAppointmentStatus={updateAppointmentStatus}
            key={appointment.zakazaniPregledId}
            appointment={appointment}
          />
        );
      })}
      {/* {scheduledProps.map((props) => {
        return (
          <SingleAppointmentNurse
            updateAppointmentStatus={updateAppointmentStatus}
            props={props}
            key={props.id}
            appointments={appointments}
          />
        );
      })} */}
    </div>
  );
};

export default ScheduledAppointmentsNurse;
