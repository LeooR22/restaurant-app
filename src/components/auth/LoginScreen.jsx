import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "challenge@alkemy.org",
    password: "react1",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login....");
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <form
                onSubmit={handleLogin}
                className="card-body p-5 text-center"
              >
                <h3 className="mb-4">Login</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control "
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>

                <button className="btn btn-success btn-block" type="submit">
                  Login
                </button>

                <hr className="my-3" />

                <div
                  className="btn btn-block btn-primary mb-4"
                  style={{ backgroundColor: "#1A73E8" }}
                  onClick={handleGoogleLogin}
                >
                  <i
                    className="me-3"
                    style={{
                      backgroundColor: "white",
                      padding: "5px",
                      paddingBottom: "7px",
                      borderRadius: "4px",
                    }}
                  >
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="google button"
                    />
                  </i>
                  Sign in with google
                </div>
                <br />
                <Link to={"/auth/register"}>
                  <u className="fs-6 text-dark">Create new account</u>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
