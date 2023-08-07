import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ShopCategory() {
     const [products, setProducts] = useState([]);
     const { category } = useParams();
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
               .then((data) => {
                    // Filter the products based on the category
                    const filteredProducts = data.filter(
                         (product) => product.product_sub_category === category
                    );
                    setProducts(filteredProducts);
               })
               .catch((error) => console.log(error));
     }, [category]);

     return (
          <div>
               <div className="container-fluid bg-secondary mb-5">
                    <div
                         className="d-flex flex-column align-items-center justify-content-center"
                         style={{ minHeight: 300 }}
                    >
                         <h1 className="font-weight-semi-bold text-uppercase mb-3">
                              {category} Products
                         </h1>
                         <div className="d-inline-flex">
                              <p className="m-0">
                                   <a href>Shop</a>
                              </p>
                              <p className="m-0 px-2">-</p>
                              <p className="m-0" style={{ textTransform: "capitalize" }}>
                                   {category} Products
                              </p>
                         </div>
                    </div>
               </div>
               <div className="row px-xl-5 pb-3">
                    {products.map((item, index) => (
                         <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                              <div className="card product-item border-0 mb-4">
                                   <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <img
                                             className="img-fluid w-100"
                                             src={item.product_image}
                                             style={{
                                                  height: "350px",
                                                  objectFit: "cover",
                                             }}
                                             alt
                                        />
                                   </div>
                                   <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3">{item.product_name}</h6>
                                        <div className="d-flex justify-content-center">
                                             <h6>{item.product_new_price}₹</h6>
                                             <h6 className="text-muted ml-2">
                                                  <del>{item.product_old_price}₹</del>
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
                                                       onClick={() => toast.error("login required")}
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
     );
}
