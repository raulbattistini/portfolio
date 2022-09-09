import React from "react";
import { Grid } from "@mui/material";
import defaultImg from "../../assets/images/default.jpg";
import facebook from "../../assets/images/icons/facebook.png";
import instagram from "../../assets/images/icons/instagram.png";

export const Footer = () => {
  return (
    <>
    <span className="align-center text-center self-center justify-center flex">
      Últimos posts:
    </span>
      <Grid container className="divide-x">
        <Grid item xs={3}>
          <img src={defaultImg} alt="Place image..." />
        </Grid>
        <Grid item xs={3}>
          <img src={defaultImg} alt="" />
        </Grid>
        <Grid item xs={3}>
          <img src={defaultImg} alt="" />
        </Grid>
        <Grid item xs={3}>
          <img src={defaultImg} alt="" />
        </Grid>
      </Grid>
      <div className="flex text-2xl justify-center mt-8">
        <span className="pt-8 font-inter font-thin">
          {" "}
          Consulte também minhas redes sociais:{" "}
        </span>
        <img
          src={facebook}
          className="w-16 h-16 flex flex-row justify-between m-5 object-cover"
          alt="Ícone do Facebook"
        />
        <img
          src={instagram}
          className="w-16 h-16 flex flex-row justify-between m-5"
          alt="Ícone do Instagram"
        />{" "}
      </div>
    </>
  );
};
