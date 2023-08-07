import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginValidation } from "./validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import app from "../firebase";
import withAuthRedirect from "./withAuthRedirect";

const Login = () => {
     const [errorMassage, setErrorMassage] = useState();
     const navigate = useNavigate();

     const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik({
          initialValues: {
               email: "",
               password: "",
          },
          validationSchema: LoginValidation,
          onSubmit: (values, action) => {
               const { email, password } = values;
               const auth = getAuth(app);

               signInWithEmailAndPassword(auth, email, password)
                    .then(() => {
                         const user = auth.currentUser;
                         if (user && user.displayName) {
                              localStorage.setItem("isLogin", "true");
                              localStorage.setItem("userId", user.uid); // Set the user ID in local storage
                              toast.success("Welcome, " + user.displayName);
                         }

                         navigate("/");
                    })
                    .catch((error) => {
                         toast.error("Login failed", error);
                    });
               action.resetForm();
          },
     });

     return (
          <>
               <div className="container-fluid bg-secondary mb-5">
                    <div
                         className="d-flex flex-column align-items-center justify-content-center"
                         style={{ minHeight: 300 }}
                    >
                         <h1 className="font-weight-semi-bold text-uppercase mb-3">
                              Login Account
                         </h1>
                         <div className="d-inline-flex">
                              <p className="m-0">
                                   <a href>Home</a>
                              </p>
                              <p className="m-0 px-2">-</p>
                              <p className="m-0">login</p>
                         </div>
                    </div>
               </div>
               {/* ------------------------------ */}
               <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                         <h2 className="section-title px-5">
                              <span className="px-2">Log in account here</span>
                         </h2>
                    </div>
                    <div className="row px-xl-5">
                         <div className="col-lg-7 mb-5 mx-auto">
                              <div className="contact-form">
                                   <div id="success" />
                                   {errorMassage ? (
                                        <p style={{ color: "red", textAlign: "center" }}>
                                             {errorMassage}
                                        </p>
                                   ) : null}
                                   <form onSubmit={handleSubmit}>
                                        <div className="control-group">
                                             <input
                                                  type="email"
                                                  className="form-control"
                                                  id="email"
                                                  name="email"
                                                  value={values.email}
                                                  onChange={handleChange}
                                                  placeholder="Enter email address here ... "
                                             />
                                             <p className="help-block text-danger">
                                                  {errors.email && touched.email
                                                       ? errors.email
                                                       : null}
                                             </p>
                                        </div>
                                        <div className="control-group">
                                             <input
                                                  type="password"
                                                  className="form-control"
                                                  id="name"
                                                  name="password"
                                                  value={values.password}
                                                  onChange={handleChange}
                                                  placeholder="Enter password here ... "
                                             />
                                             <p className="help-block text-danger">
                                                  {errors.password && touched.password
                                                       ? errors.password
                                                       : null}
                                             </p>
                                        </div>
                                        <div>
                                             <button
                                                  className="btn btn-primary py-2 px-4 w-100"
                                                  type="submit"
                                                  id="sendMessageButton"
                                             >
                                                  login account
                                             </button>
                                        </div>
                                   </form>
                                   <p className="mt-3  text-center">
                                        If you don't have an account please &nbsp;
                                        <NavLink to="/registration" className="ms-2 ">
                                             Register here
                                        </NavLink>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default withAuthRedirect(Login);
