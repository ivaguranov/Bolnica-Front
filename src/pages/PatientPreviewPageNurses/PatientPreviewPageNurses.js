import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { BiSearchAlt } from "react-icons/bi";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { FaHome, FaUser, FaUserInjured, FaPlusCircle } from "react-icons/fa";
import { BiCalendarPlus } from "react-icons/bi";
import {
	deletePatient,
	getPatients,
	searchPatients,
} from "../../redux/actions/patient";

const PatientPreviewNurses = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPatients());
	}, []);

	const patient = useSelector((state) => state.patient);
	const [value, setValue] = useState("");

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
			isActive: true,
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

	const linksHeader = {
		avatarUrl: "../nikolaSlika 1.jpg",
		welcomeMsg: "Dobro jutro",
		userName: "Ana Reljić",
		userTitle: "Med sestra",
		day: format(new Date(), "d"),
		date: format(new Date(), "d MMMM, yyyy"),
	};

	const headers = ["Name", "Surname", "Address", "City", "Contact"];

	const tableContent = [
		{
			name: "Marija",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Marko",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
		{
			name: "Dejan",
			surname: "Markovic",
			address: "Kursulina 49",
			city: "Beograd",
			contact: "0601234567",
		},
	];
	const handleClick = (id) => {
		dispatch(deletePatient(id));
		console.log("I have been clicked");
	};
	function handleOnChange(event) {
		setValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(searchPatients(value));
	}

	return (
		<div>
			<div className="sidebar-link-container">
				<Sidebar links={links} />
			</div>
			<div style={{ marginLeft: "15%" }}>
				<Header
					avatarUrl={linksHeader.avatarUrl}
					welcomeMsg={linksHeader.welcomeMsg}
					userName={linksHeader.userName}
					userTitle={linksHeader.userTitle}
					day={linksHeader.day}
					date={linksHeader.date}
				/>
				<form className="example myInline">
					<input
						type="text"
						placeholder="Search.."
						name="search"
						onChange={handleOnChange}
					/>
					<button type="submit" onClick={handleSubmit}>
						<BiSearchAlt />
					</button>
				</form>
				<br />
				<br />
				<div>
					<h1 className="myTitle">Pacijenti</h1>
				</div>
				<Table
					headers={headers}
					tableContent={tableContent}
					handleClick={handleClick}
				/>
				<br />
			</div>
		</div>
	);
};

export default PatientPreviewNurses;
