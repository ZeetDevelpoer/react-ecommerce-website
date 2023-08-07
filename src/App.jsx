import { useState } from "react";
import { Home, ProductDetails, Shop, ShopCategory, NotFound, Cart } from "./pages";
import { Login, Registration } from "./authentication";
import { Header, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
     return (
          <>
               <AppContext />
               <ToastContainer />
          </>
     );
}

function AppContext() {
     const [cartItem, setCartItem] = useState([]);
     console.log(cartItem);

     const handleAddProduct = (product) => {
          toast.success("Product added successfully");
          const ProductExist = cartItem.find((item) => item.id === product.id);
          if (ProductExist) {
               setCartItem(
                    cartItem.map((item) =>
                         item.id === product.id
                              ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
                              : item
                    )
               );
          } else {
               setCartItem([...cartItem, { ...product, quantity: 1 }]);
          }
     };

     const handleRemoveProduct = (product) => {
          toast.error("Product removed successfully");
          const ProductExist = cartItem.find((item) => item.id === product.id);
          if (ProductExist.quantity === 1) {
               setCartItem(cartItem.filter((item) => item.id !== product.id));
          } else {
               setCartItem(
                    cartItem.map((item) =>
                         item.id === product.id
                              ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
                              : item
                    )
               );
          }
     };

     return (
          <>
               <BrowserRouter>
                    <Header cartItem={cartItem} />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/product-details/:productId" element={<ProductDetails />} />
                         <Route path="/shop-category/:category" element={<ShopCategory />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/registration" element={<Registration />} />
                         <Route
                              path="/shop"
                              element={
                                   <Shop
                                        handleAddProduct={handleAddProduct}
                                        handleRemoveProduct={handleRemoveProduct}
                                   />
                              }
                         />
                         <Route
                              path="/cart"
                              element={
                                   <Cart
                                        cartItem={cartItem}
                                        handleAddProduct={handleAddProduct}
                                        handleRemoveProduct={handleRemoveProduct}
                                   />
                              }
                         />
                         <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
               </BrowserRouter>
          </>
     );
}
