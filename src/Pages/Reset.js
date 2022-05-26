import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import "../scss/Reset.scss";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  function formSubmitHandler(e) {
    e.preventDefault();
    sendPasswordReset(email);
  }

  return (

    <div className="reset">
    <div className="background__rectangle"></div>
      <div className="reset__container">
    <div className="welcome__text">
        <div className="welcome__text__left"> <p>Welcome to</p><img src="../../images/CompanyLogo.png" width='100'/></div>
        <div className="welcome__text__right"><p>Don't have an account?<br/><Link className="link__text" to="/register"><span>Register</span></Link></p></div>
        </div>
        <div className="reset__text my-1" ><p>Reset Password</p></div>
        <div className="reset__form text-start">

          <form onSubmit={formSubmitHandler}>
          
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Enter your email address</label>
              <input type="email" className="form-control" placeholder="email address" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div>
           
            <div className="resetbtn__wrapper"><button type="submit" className="btn reset__btn" onClick={() => sendPasswordReset(email)}>Send password reset email</button></div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Reset;
