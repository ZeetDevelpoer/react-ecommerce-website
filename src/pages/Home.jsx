import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
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
               .catch((error) => console.error("Error fetching categories:", error));
     }, []);

     return (
          <>
               <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                         <div
                              className="carousel-item carousel-item-next carousel-item-left"
                              style={{ height: 600 }}
                         >
                              <img
                                   className="img-fluid"
                                   src="src/assets/img/carousel-1.jpg"
                                   alt="Image"
                              />
                              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                   <div className="p-3" style={{ maxWidth: 700 }}>
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                             10% Off Your First Order
                                        </h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                             Fashionable Dress
                                        </h3>
                                        <a href className="btn btn-light py-2 px-3">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="carousel-item active carousel-item-left"
                              style={{ height: 600 }}
                         >
                              <img
                                   className="img-fluid"
                                   src="src/assets/img/carousel-2.jpg"
                                   alt="Image"
                              />
                              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                   <div className="p-3" style={{ maxWidth: 700 }}>
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                                             10% Off Your First Order
                                        </h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                                             Reasonable Price
                                        </h3>
                                        <a href className="btn btn-light py-2 px-3">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                         <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                              <span className="carousel-control-prev-icon mb-n2" />
                         </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                         <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                              <span className="carousel-control-next-icon mb-n2" />
                         </div>
                    </a>
               </div>
               <div className="container-fluid pt-5">
                    <div className="row px-xl-5 pb-3">
                         <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                              <div
                                   className="d-flex align-items-center border mb-4"
                                   style={{ padding: 30 }}
                              >
                                   <h1 className="fa fa-check text-primary m-0 mr-3" />
                                   <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                              </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                              <div
                                   className="d-flex align-items-center border mb-4"
                                   style={{ padding: 30 }}
                              >
                                   <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                                   <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                              </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                              <div
                                   className="d-flex align-items-center border mb-4"
                                   style={{ padding: 30 }}
                              >
                                   <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                                   <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                              </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                              <div
                                   className="d-flex align-items-center border mb-4"
                                   style={{ padding: 30 }}
                              >
                                   <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                                   <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="container-fluid offer pt-5">
                    <div className="row px-xl-5">
                         <div className="col-md-6 pb-4">
                              <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                                   <img src="src/assets/img/offer-1.png" alt />
                                   <div className="position-relative" style={{ zIndex: 1 }}>
                                        <h5 className="text-uppercase text-primary mb-3">
                                             20% off the all order
                                        </h5>
                                        <h1 className="mb-4 font-weight-semi-bold">
                                             Spring Collection
                                        </h1>
                                        <a href className="btn btn-outline-primary py-md-2 px-md-3">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-6 pb-4">
                              <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                                   <img src="src/assets/img/offer-2.png" alt />
                                   <div className="position-relative" style={{ zIndex: 1 }}>
                                        <h5 className="text-uppercase text-primary mb-3">
                                             20% off the all order
                                        </h5>
                                        <h1 className="mb-4 font-weight-semi-bold">
                                             Winter Collection
                                        </h1>
                                        <a href className="btn btn-outline-primary py-md-2 px-md-3">
                                             Shop Now
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                         <h2 className="section-title px-5">
                              <span className="px-2">Trandy Products</span>
                         </h2>
                    </div>
                    <div className="row px-xl-5 pb-3">
                         {productData.map((item, index) =>
                              item.product_rating === "5" ? (
                                   <>
                                        <div
                                             key={index}
                                             className="col-lg-3 col-md-6 col-sm-12 pb-1"
                                        >
                                             <div className="card product-item border-0 mb-4">
                                                  <div
                                                       className="card-header product-img position-relative overflow-hidden bg-transparent border p-0"
                                                       style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                       }}
                                                  >
                                                       <img
                                                            className="img-fluid"
                                                            src={item.product_image}
                                                            style={{
                                                                 height: "300px",
                                                                 width: "300px",
                                                                 objectFit: "cover",
                                                            }}
                                                            alt
                                                       />
                                                  </div>
                                                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                       <h6 className="text-truncate mb-3">
                                                            {item.product_name}
                                                       </h6>
                                                       <div className="d-flex justify-content-center">
                                                            <h6>₹{item.product_new_price}</h6>
                                                            <h6 className="text-muted ml-2">
                                                                 <del>
                                                                      ₹{item.product_old_price}
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
                                                            <>
                                                                 <a
                                                                      href
                                                                      className="btn btn-sm text-dark p-0"
                                                                      onClick={() =>
                                                                           toast.success(
                                                                                "product added successfully"
                                                                           )
                                                                      }
                                                                 >
                                                                      <i className="fas fa-shopping-cart text-primary mr-1" />
                                                                      Add To Cart
                                                                 </a>
                                                            </>
                                                       ) : (
                                                            <>
                                                                 <a
                                                                      href
                                                                      className="btn btn-sm text-dark p-0"
                                                                      onClick={() =>
                                                                           toast.error(
                                                                                "login required"
                                                                           )
                                                                      }
                                                                 >
                                                                      <i className="fas fa-shopping-cart text-primary mr-1" />
                                                                      Add To Cart
                                                                 </a>
                                                            </>
                                                       )}
                                                  </div>
                                             </div>
                                        </div>
                                   </>
                              ) : (
                                   <></>
                              )
                         )}
                    </div>
               </div>
               <div className="container-fluid bg-secondary my-5">
                    <div className="row justify-content-md-center py-5 px-xl-5">
                         <div className="col-md-6 col-12 py-5">
                              <div className="text-center mb-2 pb-2">
                                   <h2 className="section-title px-5 mb-3">
                                        <span className="bg-secondary px-2">Stay Updated</span>
                                   </h2>
                                   <p>
                                        Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                                        diam labore at justo ipsum eirmod duo labore labore.
                                   </p>
                              </div>
                              <form action>
                                   <div className="input-group">
                                        <input
                                             type="text"
                                             className="form-control border-white p-4"
                                             placeholder="Email Goes Here"
                                        />
                                        <div className="input-group-append">
                                             <button className="btn btn-primary px-4">
                                                  Subscribe
                                             </button>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               <div className="container-fluid pt-5">
                    <div className="text-center mb-4">
                         <h2 className="section-title px-5">
                              <span className="px-2">Just Arrived</span>
                         </h2>
                    </div>
                    <div className="row px-xl-5 pb-3">
                         {productData.map((item) => (
                              <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                   <div className="card product-item border-0 mb-4">
                                        <div
                                             className="card-header product-img position-relative overflow-hidden bg-transparent border p-0"
                                             style={{
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                             }}
                                        >
                                             <img
                                                  className="img-fluid"
                                                  src={item.product_image}
                                                  style={{
                                                       height: "300px",
                                                       width: "300px",
                                                       objectFit: "cover",
                                                  }}
                                                  alt=""
                                             />
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                             <h6 className="text-truncate mb-3">
                                                  {item.product_name}
                                             </h6>
                                             <div className="d-flex justify-content-center">
                                                  <h6>₹{item.product_new_price}</h6>
                                                  <h6 className="text-muted ml-2">
                                                       <del>₹{item.product_old_price}</del>
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
                                                  <>
                                                       <a
                                                            href
                                                            className="btn btn-sm text-dark p-0"
                                                            onClick={() =>
                                                                 toast.success(
                                                                      "product added successfully"
                                                                 )
                                                            }
                                                       >
                                                            <i className="fas fa-shopping-cart text-primary mr-1" />
                                                            Add To Cart
                                                       </a>
                                                  </>
                                             ) : (
                                                  <>
                                                       <a
                                                            href
                                                            className="btn btn-sm text-dark p-0"
                                                            onClick={() =>
                                                                 toast.error("login required")
                                                            }
                                                       >
                                                            <i className="fas fa-shopping-cart text-primary mr-1" />
                                                            Add To Cart
                                                       </a>
                                                  </>
                                             )}
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
               <div className="container-fluid py-5">
                    <div className="row px-xl-5">
                         <div className="col">
                              <div className="owl-carousel vendor-carousel owl-loaded owl-drag">
                                   <div className="owl-stage-outer">
                                        <div
                                             className="owl-stage"
                                             style={{
                                                  transform: "translate3d(-1686px, 0px, 0px)",
                                                  transition: "all 1s ease 0s",
                                                  width: 3796,
                                             }}
                                        >
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-4.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-5.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-6.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-7.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-8.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-1.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-2.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-3.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item active"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-4.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item active"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-5.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item active"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-6.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item active"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-7.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item active"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-8.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-1.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-2.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-3.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-4.jpg" alt />
                                                  </div>
                                             </div>
                                             <div
                                                  className="owl-item cloned"
                                                  style={{ width: "181.84px", marginRight: 29 }}
                                             >
                                                  <div className="vendor-item border p-4">
                                                       <img src="src/assets/img/vendor-5.jpg" alt />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="owl-nav disabled">
                                        <div className="owl-prev">prev</div>
                                        <div className="owl-next">next</div>
                                   </div>
                                   <div className="owl-dots">
                                        <div className="owl-dot active">
                                             <span />
                                        </div>
                                        <div className="owl-dot">
                                             <span />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
