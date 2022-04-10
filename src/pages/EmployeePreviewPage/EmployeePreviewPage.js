import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteEmployee,
	getEmployees,
	searchEmployees,
} from "../../redux/actions/employee";
import "./styles.css";
import { FaHome, FaUserNurse, FaPlusCircle, FaUser } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { deletePatient } from "../../redux/actions/patient";

const EmployeePreview = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEmployees());
	}, []);

	const [value, setValue] = useState("");

	const employees = useSelector((state) => state.employees);
	const links = [
		{
			id: 1,
			text: "Pocetna",
			path: "/admin",
			icon: <FaHome />,
		},
		{
			id: 2,
			text: "Zaposleni",
			path: "/admin/employee-preview",
			icon: <FaUserNurse />,
			isActive: true,
		},
		{
			id: 4,
			text: "Nov zaposleni",
			path: "/admin/register-employee",
			icon: <FaPlusCircle />,
			dividerAfter: true,
		},
		{
			id: 3,
			text: "Profil",
			path: "/profile",
			icon: <FaUser />,
		},
	];

	const linksHeader = {
		avatarUrl: "../nikolaSlika 1.jpg",
		welcomeMsg: "Dobro jutro",
		userName: "Dr. Paun",
		userTitle: "Kardiolog",
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
		console.log("I have been clicked");
		dispatch(deleteEmployee(id));
	};

	function handleOnChange(event) {
		setValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(searchEmployees(value));
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
					<h1 className="myTitle">Zaposleni</h1>
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

export default EmployeePreview;
