import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";
import "../scss/Register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  function formSubmitHandler(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    register();
  }

  return (
    <div className="register">
    <div className="background__rectangle"></div>
      <div className="register__container">
    <div className="welcome__text">
        <div className="welcome__text__left"> <p>Welcome to</p><img src="../../images/CompanyLogo.png" width='100'/></div>
        <div className="welcome__text__right"><p>Have an Account ?<br/><Link className="link__text" to="/"><span>Sign In</span></Link></p></div>
        </div>
        <div className="signup__text my-1 mb-3" ><p>Sign Up</p></div>
        <div className="signup__form text-start">
          <form onSubmit={formSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Enter your email address</label>
              <input type="email" className="form-control" placeholder="Email address" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">Username</label>
              <input type="text" className="form-control" placeholder="User name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="row">
            <div className="mb-3 col-lg-6" >
              <label htmlFor="exampleInputPassword1" className="form-label">Enter your Password</label>
              <input type="Password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="mb-3 col-lg-6">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="Password" className="form-control" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            </div>
            <div className="submibtn__wrapper"><button type="submit" className="btn submit__btn">Sign up</button></div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;