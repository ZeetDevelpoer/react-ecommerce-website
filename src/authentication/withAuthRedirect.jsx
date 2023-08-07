import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const withAuthRedirect = (WrappedComponent) => {
     const AuthRedirect = (props) => {
          const navigate = useNavigate();

          useEffect(() => {
               const auth = getAuth();
               const unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                         // User is logged in, redirect to home page
                         navigate("/");
                    }
               });

               return () => {
                    unsubscribe();
               };
          }, [navigate]);

          return <WrappedComponent {...props} />;
     };

     return AuthRedirect;
};

export default withAuthRedirect;
