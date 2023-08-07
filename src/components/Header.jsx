import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseApp from "../firebase";
import { toast } from "react-toastify";

export default function Header({ cartItem }) {
     const [categories, setCategories] = useState([]);
     const [subCategories, setSubCategories] = useState([]);
     const [user, setUser] = useState(null);
     const navigate = useNavigate();

     useEffect(() => {
          fetch("http://localhost:3001/categories")
               .then((response) => response.json())
               .then((data) => setCategories(data))
               .catch((error) => console.log(error));

          fetch("http://localhost:3001/sub-categories")
               .then((response) => response.json())
               .then((data) => setSubCategories(data))
               .catch((error) => console.log(error));
     }, []);

     useEffect(() => {
          const auth = getAuth(firebaseApp);
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user);
               } else {
                    setUser(null);
               }
          });

          return () => unsubscribe();
     }, []);

     const handleLogout = async () => {
          const auth = getAuth(firebaseApp);
          try {
               await signOut(auth);
               setUser(null);
               localStorage.setItem("isLogin", "false");
               navigate("/");
               toast.success("Logout successful");
          } catch (error) {
               console.error("Logout failed", error);
          }
     };

     const getSubCategoriesForCategory = (category) => {
          return subCategories
               .filter((subCategory) => subCategory.category === category)
               .map((subCategory) => (
                    <Link
                         to={`/shop-category/${subCategory.sub_category}`}
                         className="dropdown-item"
                         key={subCategory.id}
                    >
                         {subCategory.sub_category}
                    </Link>
               ));
     };

     return (
          <>
               <div className="container-fluid">
                    <div className="row bg-secondary py-2 px-xl-5">
                         <div className="col-lg-6 d-none d-lg-block">
                              <div className="d-inline-flex align-items-center">
                                   <a className="text-dark" href>
                                        FAQs
                                   </a>
                                   <span className="text-muted px-2">|</span>
                                   <a className="text-dark" href>
                                        Help
                                   </a>
                                   <span className="text-muted px-2">|</span>
                                   <a className="text-dark" href>
                                        Support
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-6 text-center text-lg-right">
                              <div className="d-inline-flex align-items-center">
                                   <a className="text-dark px-2" href>
                                        <i className="fab fa-facebook-f" />
                                   </a>
                                   <a className="text-dark px-2" href>
                                        <i className="fab fa-twitter" />
                                   </a>
                                   <a className="text-dark px-2" href>
                                        <i className="fab fa-linkedin-in" />
                                   </a>
                                   <a className="text-dark px-2" href>
                                        <i className="fab fa-instagram" />
                                   </a>
                                   <a className="text-dark pl-2" href>
                                        <i className="fab fa-youtube" />
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="row align-items-center py-3 px-xl-5">
                         <div className="col-lg-3 d-none d-lg-block">
                              <div className="text-decoration-none">
                                   <h1 className="m-0 display-5 font-weight-semi-bold">
                                        <span className="text-primary font-weight-bold border px-3 mr-1">
                                             E
                                        </span>
                                        Shopper
                                   </h1>
                              </div>
                         </div>
                         <div className="col-lg-6 col-6 text-left">
                              <form action>
                                   <div className="input-group">
                                        <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Search for products"
                                        />
                                        <div className="input-group-append">
                                             <span className="input-group-text bg-transparent text-primary">
                                                  <i className="fa fa-search" />
                                             </span>
                                        </div>
                                   </div>
                              </form>
                         </div>
                         <div className="col-lg-3 col-6 text-right">
                              <Link to="/cart" className="btn border">
                                   <i className="fas fa-shopping-cart text-primary" />
                                   <span className="badge">{cartItem.length}</span>
                              </Link>
                         </div>
                    </div>
               </div>
               <div className="container-fluid ">
                    <div className="row border-top px-xl-5">
                         <div
                              className="col-lg-3 d-none d-lg-block"
                              style={{ background: "yellow", position: "relative" }}
                         >
                              <div
                                   style={{
                                        position: "absolute",
                                        width: "100%",
                                        top: "0",
                                        left: "0",
                                        zIndex: "999",
                                   }}
                              >
                                   <a
                                        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 collapsed"
                                        data-toggle="collapse"
                                        href="#navbar-vertical"
                                        style={{
                                             height: 65,
                                             marginTop: "-1px",
                                             padding: "0 30px",
                                        }}
                                        aria-expanded="false"
                                   >
                                        <h6 className="m-0">Categories</h6>
                                        <i className="fa fa-angle-down text-dark" />
                                   </a>
                                   <nav
                                        className="navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 collapse"
                                        id="navbar-vertical"
                                        style={{}}
                                   >
                                        <div
                                             className="navbar-nav w-100 h-auto"
                                             style={{ background: "#fff" }}
                                        >
                                             {categories.map((category) => (
                                                  <div
                                                       key={category.id}
                                                       className="nav-item dropdown"
                                                  >
                                                       <a
                                                            href="#"
                                                            className="nav-link"
                                                            data-toggle="dropdown"
                                                       >
                                                            {category.add_category}
                                                            <i className="fa fa-angle-down float-right mt-1" />
                                                       </a>
                                                       <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                                            {getSubCategoriesForCategory(
                                                                 category.add_category
                                                            )}
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   </nav>
                              </div>
                         </div>
                         <div className="col-lg-9">
                              <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                                   <a className="text-decoration-none d-block d-lg-none">
                                        <h1 className="m-0 display-5 font-weight-semi-bold">
                                             <span className="text-primary font-weight-bold border px-3 mr-1">
                                                  E
                                             </span>
                                             Shopper
                                        </h1>
                                   </a>
                                   <button
                                        type="button"
                                        className="navbar-toggler"
                                        data-toggle="collapse"
                                        data-target="#navbarCollapse"
                                   >
                                        <span className="navbar-toggler-icon" />
                                   </button>
                                   <div
                                        className="collapse navbar-collapse justify-content-between"
                                        id="navbarCollapse"
                                   >
                                        <div className="navbar-nav mr-auto py-0">
                                             <NavLink
                                                  to="/"
                                                  href="index.html"
                                                  className="nav-item nav-link "
                                             >
                                                  Home
                                             </NavLink>
                                             <NavLink
                                                  to="/shop"
                                                  href="index.html"
                                                  className="nav-item nav-link "
                                             >
                                                  Shop
                                             </NavLink>
                                        </div>
                                        {user ? (
                                             <div
                                                  style={{
                                                       display: "flex",
                                                       justifyContent: "center",
                                                       alignItems: "center",
                                                  }}
                                             >
                                                  <p style={{ margin: "4px 20px" }}>
                                                       <span style={{ marginRight: "10px" }}>
                                                            Welcome,
                                                       </span>
                                                       <span style={{ color: "#d19c97" }}>
                                                            {user.displayName
                                                                 ? user.displayName
                                                                 : ""}
                                                       </span>
                                                  </p>
                                                  <button
                                                       className="btn btn-primary py-2 px-4 w-100"
                                                       onClick={handleLogout}
                                                  >
                                                       Logout
                                                  </button>
                                             </div>
                                        ) : (
                                             <div className="navbar-nav ml-auto py-0">
                                                  <NavLink
                                                       to="/login"
                                                       className="nav-item nav-link"
                                                       style={{ cursor: "pointer" }}
                                                  >
                                                       Login
                                                  </NavLink>
                                                  <NavLink
                                                       to="/registration"
                                                       className="nav-item nav-link"
                                                       style={{ cursor: "pointer" }}
                                                  >
                                                       Register
                                                  </NavLink>
                                             </div>
                                        )}
                                   </div>
                              </nav>
                         </div>
                    </div>
               </div>
          </>
     );
}
