import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegistrationValidation } from "./validation";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase";
import { toast } from "react-toastify";
import withAuthRedirect from "./withAuthRedirect";

const Registration = () => {
     const [errorMassage, setErrorMassage] = useState();
     const navigate = useNavigate();

     const initialValues = {
          username: "",
          email: "",
          password: "",
          copassword: "",
     };

     const { values, errors, touched, handleChange, handleSubmit } = useFormik({
          initialValues,
          validationSchema: RegistrationValidation,
          onSubmit: (values, action) => {
               const { username, email, password } = values;
               const auth = getAuth(app);

               createUserWithEmailAndPassword(auth, email, password)
                    .then(({ user }) => {
                         if (user) {
                              localStorage.setItem("isLogin", "true");
                              localStorage.setItem("userId", user.uid); // Set the user ID in local storage
                              return updateProfile(user, {
                                   displayName: username,
                              });
                         }

                         navigate("/");
                    })
                    .then(() => {
                         toast.success("Account created successfully");
                         navigate("/");
                    })
                    .catch((error) => {
                         toast.error("Registration failed", error);
                    })
                    .finally(() => {
                         action.resetForm();
                    });
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
                              Registration Account
                         </h1>
                         <div className="d-inline-flex">
                              <p className="m-0">
                                   <a href>Home</a>
                              </p>
                              <p className="m-0 px-2">-</p>
                              <p className="m-0">registration</p>
                         </div>
                    </div>
               </div>
               {/* ------------------------------ */}
               <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                         <h2 className="section-title px-5">
                              <span className="px-2">Register account here</span>
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
                                                  type="text"
                                                  className="form-control"
                                                  id="username"
                                                  name="username"
                                                  value={values.username}
                                                  onChange={handleChange}
                                                  placeholder="Enter username here ... "
                                             />
                                             <p className="help-block text-danger">
                                                  {errors.username && touched.username
                                                       ? errors.username
                                                       : null}
                                             </p>
                                        </div>
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
                                                  id="password"
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
                                        <div className="control-group">
                                             <input
                                                  type="password"
                                                  className="form-control"
                                                  id="copassword"
                                                  name="copassword"
                                                  value={values.copassword}
                                                  onChange={handleChange}
                                                  placeholder="Enter password again ... "
                                             />
                                             <p className="help-block text-danger">
                                                  {errors.copassword && touched.copassword
                                                       ? errors.copassword
                                                       : null}
                                             </p>
                                        </div>
                                        <div>
                                             <button
                                                  className="btn btn-primary py-2 px-4 w-100"
                                                  type="submit"
                                                  id="sendMessageButton"
                                             >
                                                  Register account
                                             </button>
                                        </div>
                                   </form>
                                   <p className="mt-3  text-center">
                                        If you already have an account please &nbsp;
                                        <NavLink to="/login" className="ms-2">
                                             Login here
                                        </NavLink>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default withAuthRedirect(Registration);
