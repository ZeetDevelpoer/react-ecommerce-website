import React from "react";

export default function NotFound() {
     return (
          <div
               style={{
                    height: "100vh",
                    width: "100%",
                    background: "#D19C97 ",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    zIndex: "999",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
               }}
          >
               <h1 style={{ color: "#000", fontSize: "70px" }}> 404 NotFound</h1>
          </div>
     );
}
