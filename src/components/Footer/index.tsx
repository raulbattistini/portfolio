import React from "react";
import { Grid } from "@mui/material";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  function redirGithub() {
    window.location.assign("https://github.com/raulbattistini");
  }
  function redirLinkedin() {
    window.location.assign("https://linkedin.com/in/raul-battistini");
  }
  return (
    <div className=" bg-[#272727] z-10">
      <span className=" text-white flex text-2xl justify-center pt-2 pb-2 h-fit flex-row pocket:p-0">
        <span className=" pt-9 pb-12 text-lg tablet:text-sm phone:text-xs pocket:text-xs font-thin pl-3 rounded-sm hover:text-yellow-500 pocket:mt-6 phone:text-lg phone:mt-5">
          {" "}
          Consulte também minhas redes sociais:{" "}
        </span>
        <SiGithub
          className="w-10 h-10 flex flex-row justify-between m-8 object-cover cursor-pointer hover:text-indigo-500 pocket:mt-14 phone:mt-12"
          onClick={redirGithub}
        />
        <FaLinkedin
          className="w-10 h-10 flex flex-row justify-between m-8 text-9xl cursor-pointer hover:text-indigo-500 pocket:mt-14 phone:mt-12"
          onClick={redirLinkedin}
        />
      </span>
    </div>
  );
};
