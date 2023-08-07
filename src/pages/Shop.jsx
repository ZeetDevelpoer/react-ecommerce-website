import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Shop({ handleAddProduct }) {
     const [productData, setProductData] = useState([]);
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     useEffect(() => {
          const storedIsLoggedIn = localStorage.getItem("isLogin");
          if (storedIsLoggedIn) {
               setIsLoggedIn(storedIsLoggedIn === "true");
          }
     }, []);

     useEffect(() => {
          fetch("http://localhost:3001/product-details")
               .then((response) => response.json())
               .then((data) => setProductData(data))
               .catch((error) => console.error("Error fetching products:", error));
     }, []);

     return (
          <>
               <div className="container-fluid bg-secondary mb-5">
                    <div
                         className="d-flex flex-column align-items-center justify-content-center"
                         style={{ minHeight: 300 }}
                    >
                         <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
                         <div className="d-inline-flex">
                              <p className="m-0">
                                   <a href>Home</a>
                              </p>
                              <p className="m-0 px-2">-</p>
                              <p className="m-0">Shop</p>
                         </div>
                    </div>
               </div>
               <div className="container-fluid pt-5">
                    <div className="row px-xl-5">
                         <div className="col-lg-3 col-md-12">
                              {/* Price Start */}
                              <div className="border-bottom mb-4 pb-4">
                                   <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                                   <form>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  defaultChecked
                                                  id="price-all"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="price-all"
                                             >
                                                  All Price
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  1000
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="price-1"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="price-1"
                                             >
                                                  $0 - $100
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  150
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="price-2"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="price-2"
                                             >
                                                  $100 - $200
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  295
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="price-3"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="price-3"
                                             >
                                                  $200 - $300
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  246
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="price-4"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="price-4"
                                             >
                                                  $300 - $400
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  145
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="price-5"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="price-5"
                                             >
                                                  $400 - $500
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  168
                                             </span>
                                        </div>
                                   </form>
                              </div>
                              {/* Price End */}
                              {/* Color Start */}
                              <div className="border-bottom mb-4 pb-4">
                                   <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                                   <form>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  defaultChecked
                                                  id="color-all"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="price-all"
                                             >
                                                  All Color
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  1000
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="color-1"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="color-1"
                                             >
                                                  Black
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  150
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="color-2"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="color-2"
                                             >
                                                  White
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  295
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="color-3"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="color-3"
                                             >
                                                  Red
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  246
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="color-4"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="color-4"
                                             >
                                                  Blue
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  145
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="color-5"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="color-5"
                                             >
                                                  Green
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  168
                                             </span>
                                        </div>
                                   </form>
                              </div>
                              {/* Color End */}
                              {/* Size Start */}
                              <div className="mb-5">
                                   <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                                   <form>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  defaultChecked
                                                  id="size-all"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="size-all"
                                             >
                                                  All Size
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  1000
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="size-1"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="size-1"
                                             >
                                                  XS
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  150
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="size-2"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="size-2"
                                             >
                                                  S
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  295
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="size-3"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="size-3"
                                             >
                                                  M
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  246
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="size-4"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="size-4"
                                             >
                                                  L
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  145
                                             </span>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                             <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="size-5"
                                             />
                                             <label
                                                  className="custom-control-label"
                                                  htmlFor="size-5"
                                             >
                                                  XL
                                             </label>
                                             <span className="badge border font-weight-normal">
                                                  168
                                             </span>
                                        </div>
                                   </form>
                              </div>
                              {/* Size End */}
                         </div>
                         <div className="col-lg-9 col-md-12">
                              <div className="row pb-3">
                                   <div className="col-12 pb-1">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                             <form action>
                                                  <div className="input-group">
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search by name"
                                                       />
                                                       <div className="input-group-append">
                                                            <span className="input-group-text bg-transparent text-primary">
                                                                 <i className="fa fa-search" />
                                                            </span>
                                                       </div>
                                                  </div>
                                             </form>
                                             <div className="dropdown ml-4">
                                                  <button
                                                       className="btn border dropdown-toggle"
                                                       type="button"
                                                       id="triggerId"
                                                       data-toggle="dropdown"
                                                       aria-haspopup="true"
                                                       aria-expanded="false"
                                                  >
                                                       Sort by
                                                  </button>
                                                  <div
                                                       className="dropdown-menu dropdown-menu-right"
                                                       aria-labelledby="triggerId"
                                                  >
                                                       <a className="dropdown-item" href="#">
                                                            Latest
                                                       </a>
                                                       <a className="dropdown-item" href="#">
                                                            Popularity
                                                       </a>
                                                       <a className="dropdown-item" href="#">
                                                            Best Rating
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {productData.map((item) => (
                                        <div
                                             key={item.id}
                                             className="col-lg-4 col-md-6 col-sm-12 pb-1"
                                        >
                                             <div className="card product-item border-0 mb-4">
                                                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                       <img
                                                            className="img-fluid w-100"
                                                            src={item.product_image}
                                                            style={{
                                                                 height: "350px",
                                                                 objectFit: "cover",
                                                            }}
                                                            alt={item.product_name}
                                                       />
                                                  </div>
                                                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                       <h6 className="text-truncate mb-3">
                                                            {item.product_name}
                                                       </h6>
                                                       <div className="d-flex justify-content-center">
                                                            <h6>{item.product_new_price}₹</h6>
                                                            <h6 className="text-muted ml-2">
                                                                 <del>
                                                                      {item.product_old_price}₹
                                                                 </del>
                                                            </h6>
                                                       </div>
                                                  </div>
                                                  <div className="card-footer d-flex justify-content-between bg-light border">
                                                       <Link
                                                            to={`/product-details/${item.id}`}
                                                            className="btn btn-sm text-dark p-0"
                                                       >
                                                            <i className="fas fa-eye text-primary mr-1" />
                                                            View Detail
                                                       </Link>
                                                       {isLoggedIn ? (
                                                            <button
                                                                 className="btn btn-sm text-dark p-0"
                                                                 onClick={() =>
                                                                      handleAddProduct(item)
                                                                 }
                                                            >
                                                                 <i className="fas fa-shopping-cart text-primary mr-1" />
                                                                 Add to Cart
                                                            </button>
                                                       ) : (
                                                            <button
                                                                 className="btn btn-sm text-dark p-0"
                                                                 onClick={() =>
                                                                      toast.error("Login required")
                                                                 }
                                                            >
                                                                 <i className="fas fa-shopping-cart text-primary mr-1" />
                                                                 Add to Cart
                                                            </button>
                                                       )}
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
