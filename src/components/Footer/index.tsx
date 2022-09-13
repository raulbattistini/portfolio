import React from "react";
import { Grid } from "@mui/material";
import defaultImg from "../../assets/images/default.jpg";
import githubLogo from "../../assets/images/icons/GitHub-icon.png";
import linkedin from "../../assets/images/icons/linkedin.png";

export const Footer = () => {
  return (
    <>
    <span className=" bg-[#272727] text-white text-2xl pb-3 pt-3 align-center text-center self-center justify-center flex divide-x">
      
    </span>
      <div className="bg-[#272727] text-white flex text-2xl justify-center">
        <span className=" pt-8 font-inter font-thin">
          {" "}
          Consulte também minhas redes sociais:{" "}
        </span>
        <img
          src={githubLogo}
          className="w-10 h-10 flex flex-row justify-between m-8 object-cover"
          alt="Ícone do GitHub"
        />
        <img
          src={linkedin}
          className="w-10 h-10 flex flex-row justify-between m-8"
          alt="Ícone do Instagram"
        />{" "}
      </div>
    </>
  );
};
