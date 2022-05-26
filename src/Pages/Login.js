import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../scss/Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  function formSubmitHandler(event) {
    event.preventDefault();
    logInWithEmailAndPassword(email, password);
  }

  return (
    <div className="login">
      <div className="background__rectangle"></div>
      <div className="login__container">
        <div className="welcome__text">
          <div className="welcome__text__left">
            {" "}
            <p>Welcome to</p>
            <img src="../../images/CompanyLogo.png" width="100" />
          </div>
          <div className="welcome__text__right">
            <p>
              No Account?
              <br />
              <Link className="link__text" to="/register">
                <span>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="signup__text my-1 mb-3">
          <p>Sign in</p>
        </div>
        <div className="signup__form text-start">
          <form onSubmit={formSubmitHandler}>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter your email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Enter your password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="forget__password">
                <Link className="link__text" to="/reset">
                  <small>Forget Password</small>
                </Link>
              </div>
            </div>
            <div className="submibtn__wrapper">
              <button type="submit" className="btn submit__btn">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="or__seprator my-4">Or</div>
        <div className="signin__with__google__wrapper" onClick={signInWithGoogle}>
          <div className="signin__with__social" >
            <img src="../../images/Google.svg" height="20px" />  Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
