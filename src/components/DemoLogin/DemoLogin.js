import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import useStyles from "./styles";

const DemoLogin = () => {
	const classes = useStyles();

	return (
		<div className="buttonContainer">
			<div>
				<Link to="/">
					<button
						type="button"
						className="btn btn-outline-primary customButton"
					>
						Nazad na pocetnu (Primary)
					</button>
				</Link>

				<button
					type="button"
					className="btn btn-outline-secondary customButton"
				>
					Secondary
				</button>
				<button
					type="button"
					className="btn btn-outline-success customButton"
				>
					Success
				</button>
				<button
					type="button"
					className="btn btn-outline-danger customButton"
				>
					Danger
				</button>
				<button
					type="button"
					className="btn btn-outline-warning customButton"
				>
					Warning
				</button>
				<button
					type="button"
					className="btn btn-outline-info customButton"
				>
					Info
				</button>
				<button
					type="button"
					className="btn btn-outline-dark customButton"
				>
					Dark
				</button>
			</div>
			<ButtonGroup
				color="primary"
				aria-label="outlined primary button group"
				className={classes.muiContainer}
			>
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	);
};

export default DemoLogin;
