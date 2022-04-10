import React from "react";
import { FaHome, FaUserInjured, FaUser, FaPlusCircle } from "react-icons/fa";
import { BiCalendarPlus } from "react-icons/bi";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderNurse from "../../components/HeaderNurse/HeaderNurse";
import ScheduledAppointmentsNurse from "../../components/ScheduledAppointmentsNurse/ScheduledAppointmentsNurse";

const NurseHomepage = () => {
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
      id: 3,
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

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={links} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <HeaderNurse
          userName={headerProps.userName}
          userTitle={headerProps.userTitle}
        />
        <ScheduledAppointmentsNurse />
      </div>
    </>
  );
};

export default NurseHomepage;
