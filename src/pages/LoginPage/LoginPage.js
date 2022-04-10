import "./styles.css";
import LoginBolinca from "./LoginBolnica.jpg";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

const initialState = {
  email: "",
  password: "",
};

function LoginPage() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };
  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Prijava</h1>
            <br></br>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <br></br>
            <button onClick={handleSubmit}>Prijavi se</button>
            <a href="#">Zaboravljena lozinka?</a>
          </form>
        </div>
      </div>
      <div className="image-container">
        <img className="image" src={LoginBolinca}></img>
      </div>
    </div>
  );
}
export default LoginPage;
