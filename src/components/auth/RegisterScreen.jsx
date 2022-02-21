import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formvalues, handleInputChange] = useForm({
    name: "Alkemy",
    email: "challenge@alkemy.org",
    password: "react",
    confirmPassword: "react",
  });

  const { name, email, password, confirmPassword } = formvalues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registrando...");
    dispatch(startRegisterWithEmailPasswordName(email, password, name));
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
                onSubmit={handleRegister}
                className="card-body p-5 text-center"
              >
                <h3 className="mb-4">Register</h3>

                <div className="form-outline mb-3">
                  <input
                    type="name"
                    className="form-control "
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  className="btn btn-success btn-block mb-3"
                  type="submit"
                >
                  Register
                </button>

                <br />
                <Link to={"/auth/login"}>
                  <u className="fs-6 text-dark">Already registered ?</u>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;
