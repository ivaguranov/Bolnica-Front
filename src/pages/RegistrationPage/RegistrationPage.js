import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FaHome, FaUserNurse, FaPlusCircle, FaUser } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";
import { createEmployee } from "../../redux/actions/employee";
import { getDepartments } from "../../redux/actions/departments";
import "./styles.css";

const initialState = {
	name: "",
	surname: "",
	jmbg: "",
	email: "",
	address: "",
	city: "",
	proffesion: "",
	title: "",
	phone: "",
	gender: "male",
	dob: new Date(),
	department: "",
	userName: "",
	password: "",
	privilege: "",
};

function RegistrationPage() {
	const dispatch = useDispatch();
	const [form, setForm] = useState(initialState);
	const navigate = useNavigate();

	// useEffect(() => {
	// 	dispatch(getDepartments());
	// }, []);

	// const departments = useSelector((state) => state.departments);

	const links = [
		{
			id: 1,
			text: "Pocetna",
			path: "/admin",
			icon: <FaHome />,
		},
		{
			id: 4,
			text: "Zaposleni",
			path: "/admin/employee-preview",
			icon: <FaUserNurse />,
		},
		{
			id: 2,
			text: "Nov zaposleni",
			path: "/admin/register-employee",
			icon: <FaPlusCircle />,
			dividerAfter: true,
			isActive: true,
		},
		{
			id: 3,
			text: "Profil",
			path: "/profile",
			icon: <FaUser />,
		},
	];

	const departmentsDemo = [
		{
			id: 0,
			name: "Prvo odeljenje",
		},
		{
			id: 1,
			name: "Drugo odeljenje",
		},
		{
			id: 2,
			name: "Trece odeljenje",
		},
	];

	const privilegesDemo = [
		{
			id: 0,
			name: "Admin",
		},
		{
			id: 1,
			name: "Doktor",
		},
		{
			id: 2,
			name: "Sestra",
		},
	];

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const onChangeDateHandler = (e) =>
		setForm({ ...form, dob: new Date(e.target.value) });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		dispatch(createEmployee(form));
		// navigate("/admin");
	};
	return (
		<div style={{ marginLeft: "15%" }}>
			<div className="sidebar-link-container">
				<Sidebar links={links} />
			</div>
			<form onSubmit={handleSubmit} className="form-custom">
				<h1 className="form-heading">Prijava zaposlenih</h1>
				<br></br>
				<div className="form-group-custom">
					<input
						className="margin-right"
						placeholder="Ime"
						onChange={handleChange}
						name="name"
						type="text"
					/>
					<input
						className="margin-left"
						placeholder="Prezime"
						onChange={handleChange}
						name="surname"
						type="text"
					/>
				</div>
				<div className="form-group-custom">
					<input
						className="margin-right"
						type="email"
						placeholder="Email"
						onChange={handleChange}
						name="email"
					/>
					<input
						placeholder="Lozinka"
						type="password"
						onChange={handleChange}
						name="password"
						className="margin-left"
					/>
				</div>
				<div className="form-group-custom">
					<input
						type="date"
						data-date=""
						data-date-format="ddmmyyyy"
						onChange={onChangeDateHandler}
						name="dob"
						className="margin-right"
					/>
					<input
						type="text"
						placeholder="Adresa stanovanja"
						onChange={handleChange}
						name="address"
						className="margin-left margin-right"
					/>
					<input
						type="text"
						placeholder="Mesto stanovanja"
						onChange={handleChange}
						name="city"
						className="margin-left"
					/>
				</div>
				<div className="form-group-custom">
					<input
						type="text"
						placeholder="Kontakt"
						onChange={handleChange}
						name="phone"
						className="margin-right"
					/>
					<input
						className="margin-left"
						type="text"
						placeholder="JMBG"
						onChange={handleChange}
						name="jmbg"
					/>
				</div>
				<div className="form-group-custom">
					<select
						onChange={handleChange}
						className="form-select-custom small-select margin-right"
						aria-label="Default select example"
						defaultValue=""
						name="privilege"
					>
						<option value="" disabled>
							Privilegija
						</option>
						{privilegesDemo.map((privilege) => {
							return (
								<option key={privilege.id} value={privilege.id}>
									{privilege.name}
								</option>
							);
						})}
					</select>
					<select
						onChange={handleChange}
						className="form-select-custom small-select margin-left"
						aria-label="Default select example"
						defaultValue=""
						name="department"
					>
						<option value="" disabled>
							Odeljenje
						</option>
						{departmentsDemo.map((department) => {
							return (
								<option
									key={department.id}
									value={department.id}
								>
									{department.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className="form-group-custom">
					<select
						onChange={handleChange}
						className="form-select-custom small-select margin-right"
						aria-label="Default select example"
						defaultValue="0"
						name="title"
					>
						<option value="">Titula</option>
						<option value="Prof. dr. med.">Prof. dr. med.</option>
						<option value="Dr. med. spec.">Dr. med. spec.</option>
						<option value="Dr. sci. med.">Dr. sci. med.</option>
						<option value="Dipl. farm.">Dipl. farm.</option>
						<option value="Mag. farm.">Mag. farm.</option>
						<option value="Mr.">Mr.</option>
					</select>
					<select
						onChange={handleChange}
						className="form-select-custom small-select margin-left"
						aria-label="Default select example"
						defaultValue="0"
						name="title"
					>
						<option value="">Zanimanje</option>
						<option value="Med. sestra">Med. sestra</option>
						<option value="Spec. biohemicar">
							Spec. biohemicar
						</option>
						<option value="Spec. gastroenterolog.">
							Spec. gastroenterolog
						</option>
						<option value="Spec. ginekolog">Spec. ginekolog</option>
						<option value="Spec. endrokrinolog">
							Spec. endrokrinolog
						</option>
						<option value="Spec. kardiolog">Spec. kardiolog</option>
						<option value="Spec. neurolog">Spec. neurolog</option>
						<option value="Spec. nefrolog">Spec. nefrolog</option>
						<option value="Spec. pshijatar">Spec. pshijatar</option>
						<option value="Spec. pulmolog">Spec. pulmolog</option>
						<option value="Spec. urolog">Spec. urolog</option>
						<option value="Spec. hematolog">Spec. hematolog</option>
						<option value="Spec. hirurg">Spec. hirurg</option>
					</select>
				</div>
				<div className="form-group-custom">
					<div className="wrapper">
						<input
							type="radio"
							name="gender"
							id="option-1"
							value="male"
							onChange={handleChange}
							checked
						/>
						<input
							type="radio"
							name="gender"
							value="female"
							id="option-2"
							onChange={handleChange}
						/>
						<label htmlFor="option-1" className="option option-1">
							<div className="dot"></div>
							<span>Muski pol</span>
						</label>
						<label htmlFor="option-2" className="option option-2">
							<div className="dot"></div>
							<span>Zenski pol</span>
						</label>
					</div>
				</div>
				<br></br>
				<button onClick={handleSubmit}>Registruj zaposlenog</button>
			</form>
		</div>
	);
}
export default RegistrationPage;
