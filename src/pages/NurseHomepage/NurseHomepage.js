import React, { useEffect, useState } from "react";
import { FaHome, FaUserInjured, FaUser, FaPlusCircle } from "react-icons/fa";
import { BiCalendarPlus } from "react-icons/bi";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderNurse from "../../components/HeaderNurse/HeaderNurse";
import ScheduledAppointmentsNurse from "../../components/ScheduledAppointmentsNurse/ScheduledAppointmentsNurse";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../redux/actions/employee";
import { getPatients } from "../../redux/actions/patient";
import { getAppointments } from "../../redux/actions/appointment";

const NurseHomepage = () => {
  const dispatch = useDispatch();
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const employees = useSelector((state) => state.employees);
  const patients = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getEmployees());
    dispatch(getPatients());
  }, []);

  useEffect(() => {
    setSelectedDoctor(employees[0]);
  }, [employees]);

  const links = [
    {
      id: 1,
      text: "Početna",
      path: "/nurse",
      isActive: true,
      icon: <FaHome />,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/nurse/patient-preview",
      icon: <FaUserInjured />,
    },
    {
      id: 3,
      text: "Zakazivanje",
      path: "/nurse/schedule-appointment",
      icon: <BiCalendarPlus />,
    },
    {
      id: 4,
      text: "Nov pacijent",
      path: "/nurse/register-patient",
      icon: <FaPlusCircle />,
      dividerAfter: true,
    },
    {
      id: 6,
      text: "Profil",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  const headerProps = {
    userName: "Ana Reljic",
    userTitle: "Med sestra",
  };

  const getDoctorAppointments = (lbz) => {
    const newDoctor = employees.find((doctor) => doctor.lbz === lbz);
    setSelectedDoctor(newDoctor);
    // dispatch(getAppointments(lbz));
  };

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={links} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        {employees && selectedDoctor && (
          <HeaderNurse
            employees={employees}
            selectedDoctor={selectedDoctor}
            userName={headerProps.userName}
            userTitle={headerProps.userTitle}
            getDoctorAppointments={getDoctorAppointments}
          />
        )}
        {patients && <ScheduledAppointmentsNurse patients={patients} />}
      </div>
    </>
  );
};

export default NurseHomepage;
