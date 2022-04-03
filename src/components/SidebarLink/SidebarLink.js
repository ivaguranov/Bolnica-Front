import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SidebarLink = ({ link }) => {
	const { id, text, path, icon, isActive, dividerAfter } = link;
	return (
		<li key={`prop-${id}`} className="nav-item link-item">
			<Link
				to={path}
				className={`nav-link link-text ${
					isActive ? "active-link" : ""
				}`}
			>
				<i className={`${icon} customIcon `}></i>
				<span>{text}</span>
			</Link>
			{dividerAfter ? <div className="divider"></div> : <></>}
		</li>
	);
};

export default SidebarLink;
