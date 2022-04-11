import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaUserInjured, FaPlusCircle } from "react-icons/fa";
import { BiCalendarPlus } from "react-icons/bi";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import { Dropdown } from "react-bootstrap";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import NewAppointment from "../../components/NewAppointment/NewAppointment";
import Header from "../../components/Header/Header";
import {
  createAppointmentNurse,
  deleteAppointmentNurse,
} from "../../redux/actions/appointments";
import DeleteAppointment from "../../components/DeleteAppointment/DeleteAppointment";
import { getEmployees } from "../../redux/actions/employee";
import { getPatients } from "../../redux/actions/patient";

const ScheduleAppointmentPage = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const patients = useSelector((state) => state.patients);
  const [date, setDate] = useState(new Date());
  const [newAppointmentVisible, setNewAppointmentVisible] = useState(false);
  const [deleteAppointmentVisible, setDeleteAppointmentVisible] =
    useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(1);
  const [appointmentIdDelete, setAppointmentIdDelete] = useState(1);
  const [events, setEvents] = useState([
    {
      id: 1,
      startAt: "2022-04-08T08:00:00.000Z",
      endAt: "2022-04-08T09:00:00.000Z",
      summary: "Prvi pregled",
      color: "#336cfb",
      calendarID: "work",
    },
  ]);
  useEffect(() => {
    dispatch(getEmployees());
    dispatch(getPatients());
  }, []);

  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };

  const doctor = employees[0];
  console.log(employees);

  const links = [
    {
      id: 1,
      text: "Početna",
      path: "/nurse",
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
      isActive: true,
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

  const getDoctorAppointments = (id) => {
    console.log(id);
  };

  // if (doctors) getDoctorAppointments(doctors[0].id);

  const createNewAppointment = (doctorId, patientId, date, examinationType) => {
    const newEvent = {
      id: events.length + 1,
      startAt: date.toISOString(),
      endAt: date.addHours(1).toISOString(),
      summary: events.length + ". pregled",
      color: "#336cfb",
      calendarID: "work",
    };
    console.log(examinationType);
    setNewAppointmentVisible(false);
    setEvents([...events, newEvent]);
    dispatch(
      createAppointmentNurse({
        examinationEmployeeId: doctorId,
        patient: patientId,
        dateAndTimeOfAppointment: date.toISOString(),
        note: "",
        // examinationType,
      })
    );
  };

  const deleteAppointment = () => {
    setDeleteAppointmentVisible(false);
    //delete event from list
    dispatch((appointmentIdDelete) =>
      deleteAppointmentNurse({ appointmentIdDelete })
    );
  };

  return (
    <div className="page-container">
      <div>
        <Sidebar links={links} />
      </div>
      <Dropdown className="dropdownButton">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Dr. Paun
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* {doctors.map((doctor) => {
						return (
							<Dropdown.Item
								onClick={() => getDoctorAppointments(doctor.id)}
							>
								Dr. {doctor.name}
							</Dropdown.Item>
						);
					})} */}
          <Dropdown.Item onClick={() => getDoctorAppointments(1)}>
            Dr. Prvi
          </Dropdown.Item>
          <Dropdown.Item onClick={() => getDoctorAppointments(2)}>
            Dr. Drugi
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ marginLeft: "15%", height: "100vh" }}>
        <CustomCalendar
          events={events}
          setDate={setDate}
          setNewAppointmentVisible={setNewAppointmentVisible}
          setDeleteAppointmentVisible={setDeleteAppointmentVisible}
          setAppointmentIdDelete={setAppointmentIdDelete}
        />
      </div>
      {newAppointmentVisible && doctor ? (
        <NewAppointment
          avatarUrl={"nikolaSlika 1.jpg"}
          userName={"Dr. Paun"}
          userTitle={"Kardiolog"}
          doctorId={doctor.lbz}
          createNewAppointment={createNewAppointment}
          setNewAppointmentVisible={setNewAppointmentVisible}
          date={date}
          patients={patients}
        />
      ) : (
        <></>
      )}

      {deleteAppointmentVisible ? (
        <DeleteAppointment
          avatarUrl={"nikolaSlika 1.jpg"}
          userName={"Dr. Paun"}
          userTitle={"Kardiolog"}
          deleteAppointment={deleteAppointment}
          date={date}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ScheduleAppointmentPage;
