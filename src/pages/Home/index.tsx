import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const Home = () => {

  return (
    <>
      <Navbar />
      <div className="main">
        <span className="flex mt-96 text-center text-lg">
          {" "}
          pagina principal{" "}
        </span>
        <span className="flex mt-96 text-center text-lg">
          {" "}
          pagina principal{" "}
        </span>
        <span className="flex mt-96 text-center text-lg">
          {" "}
          pagina principal{" "}
        </span>
        <span className="flex mt-96 text-center text-lg">
          {" "}
          pagina principal{" "}
        </span>
        <span className="flex mt-96 text-center text-lg">
          {" "}
          pagina principal{" "}
        </span>
      </div>
      <Footer />
    </>
  );
};
