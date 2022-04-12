// import React from "react";

// const SignUp = () => {
//   return (
//     <div>
//       <h1>Sign Up Successful</h1>
//     </div>
//   );
// };

// export default SignUp;
import { useState } from "react";
import "./styles/signup.css";
import loginImg from "./images/login.png";

export default function Signup() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div className="image">
        <img src={loginImg} />
      </div>
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <table>
          <tr>
            <td>
              <label className="label">Name </label>
            </td>
            <td>
              <input
                onChange={handleName}
                className="input"
                value={name}
                type="text"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="label">Email </label>
            </td>
            <td>
              <input
                onChange={handleEmail}
                className="input"
                value={email}
                type="email"
              />
            </td>
          </tr>
          <tr>
            <td align="right">
              <label className="label">Password </label>
            </td>
            <td align="left">
              <input
                onChange={handlePassword}
                className="input"
                value={password}
                type="password"
              />
            </td>
          </tr>
          <tr>
            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </tr>
        </table>
      </form>
    </div>
  );
}
