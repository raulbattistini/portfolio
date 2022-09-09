import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <div className="ml-5 flex">
            <Link to="/">Raul Battistini - desenvolvedor</Link>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="align-center text-center">
            <Grid container>
              <Grid item xs={4}>
                Tecnologias
              </Grid>
              <Grid item xs={4}>
                Projetos
              </Grid>
              <Grid item xs={4}>
                Experiência
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex flex-end float-right mr-5">
            <Link to="/contact"> Entrar em contato</Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
