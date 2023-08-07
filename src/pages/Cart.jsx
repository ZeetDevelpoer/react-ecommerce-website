export default function Cart({ cartItem, handleAddProduct, handleRemoveProduct }) {
     const cartTotal = cartItem.reduce(
          (total, item) =>
               total + item.quantity * parseFloat(item.product_new_price.replace(",", "")),
          0
     );

     return (
          <>
               <div className="container-fluid bg-secondary mb-5">
                    <div
                         className="d-flex flex-column align-items-center justify-content-center"
                         style={{ minHeight: 300 }}
                    >
                         <h1 className="font-weight-semi-bold text-uppercase mb-3">
                              Shopping Cart
                         </h1>
                         <div className="d-inline-flex">
                              <p className="m-0">
                                   <a href>Home</a>
                              </p>
                              <p className="m-0 px-2">-</p>
                              <p className="m-0">Shopping Cart</p>
                         </div>
                    </div>
               </div>

               <div className="cart-items p-5">
                    {cartItem.length === 0 ? (
                         <>
                              <div className="container-fluid">
                                   <h1>Cart</h1>
                                   <p>Your cart is empty.</p>
                              </div>
                         </>
                    ) : (
                         <>
                              <div className="container-fluid pt-5">
                                   <div className="row px-xl-5">
                                        <div className="col-lg-8 table-responsive mb-5">
                                             <table className="table table-bordered text-center mb-0">
                                                  <thead className="bg-secondary text-dark">
                                                       <tr>
                                                            <th>Products</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                       </tr>
                                                  </thead>
                                                  <tbody className="align-middle">
                                                       {cartItem.map((item) => (
                                                            <tr key={item.id}>
                                                                 <td className="align-middle ">
                                                                      <img
                                                                           src={item.product_image}
                                                                           alt
                                                                           style={{
                                                                                width: 50,
                                                                           }}
                                                                      />{" "}
                                                                      {item.product_name}
                                                                 </td>
                                                                 <td className="align-middle">
                                                                      ₹{item.product_new_price}
                                                                 </td>
                                                                 <td className="align-middle">
                                                                      <div
                                                                           className="input-group quantity mx-auto"
                                                                           style={{
                                                                                width: 100,
                                                                           }}
                                                                      >
                                                                           <div className="input-group-btn">
                                                                                <button
                                                                                     className="btn btn-sm btn-primary btn-minus"
                                                                                     onClick={() =>
                                                                                          handleAddProduct(
                                                                                               item
                                                                                          )
                                                                                     }
                                                                                >
                                                                                     <i className="fa fa-plus" />
                                                                                </button>
                                                                           </div>
                                                                           <div
                                                                                style={{
                                                                                     margin: "3px 10px 0px 10px",
                                                                                }}
                                                                           >
                                                                                {item.quantity}
                                                                           </div>

                                                                           <div className="input-group-btn">
                                                                                <button
                                                                                     className="btn btn-sm btn-primary btn-plus"
                                                                                     onClick={() =>
                                                                                          handleRemoveProduct(
                                                                                               item
                                                                                          )
                                                                                     }
                                                                                >
                                                                                     <i className="fa fa-minus" />
                                                                                </button>
                                                                           </div>
                                                                      </div>
                                                                 </td>
                                                                 <td className="align-middle">
                                                                      ₹
                                                                      {item.quantity *
                                                                           parseFloat(
                                                                                item.product_new_price.replace(
                                                                                     ",",
                                                                                     ""
                                                                                )
                                                                           )}
                                                                 </td>
                                                            </tr>
                                                       ))}
                                                  </tbody>
                                             </table>
                                        </div>
                                        <div className="col-lg-4">
                                             <div className="card border-secondary mb-5">
                                                  <div className="card-header bg-secondary border-0">
                                                       <h4 className="font-weight-semi-bold m-0">
                                                            Cart Summary
                                                       </h4>
                                                  </div>
                                                  <div className="card-footer border-secondary bg-transparent">
                                                       <div className="d-flex justify-content-between mt-2">
                                                            <h5 className="font-weight-bold">
                                                                 Total
                                                            </h5>
                                                            <h5 className="font-weight-bold">
                                                                 ₹{cartTotal}
                                                            </h5>
                                                       </div>
                                                       <button className="btn btn-block btn-primary my-3 py-3">
                                                            Proceed To Checkout
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </>
                    )}
               </div>
          </>
     );
}
