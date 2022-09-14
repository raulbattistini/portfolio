import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import cssLogo from "../../assets/images/icons/CSS3-Logo.png";
import htmlLogo from "../../assets/images/icons/HTML5_Badge.svg";
import includesMySql from "../../assets/images/icons/include-mysql.png";
import jsLogo from "../../assets/images/icons/JavaScript-Logo.png";
import nodeLogo from "../../assets/images/icons/nodejs_logo.svg";
import reactLogo from "../../assets/images/icons/react-icon.svg";
import tsLogo from "../../assets/images/icons/typescript_logo.svg";
import defaultImg from "../../assets/images/default.jpg";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <div className="pt-10">
          <h2 className="z-10 text-white text-center text-2xl font-extralight bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3  ">
            {" "}
            Tecnologias
          </h2>
          <span className="flex justify-around">
            {" "}
            <Grid container className="pt-8">
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <img
                  src={reactLogo}
                  alt="Logo do React"
                  className="w-16 h-16  items-center	justify-center	flex-wrap flex"
                  title="React é uma library de Javascript feita para construção de páginas client-side no modelo SPA (single-page application)"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <img
                  src={nodeLogo}
                  alt="Logo do Node"
                  title="NodeJs é um runtime de Javascript que permite à linguagem ser rodada do lado do servidor de forma eficiente, graças ao seu Input/Output não-bloqueante"
                  className="w-20 h-20 items-center	justify-center	flex-wrap flex"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <img
                  src={tsLogo}
                  alt="Logo do Typescript"
                  title="Typescript é um superset de JavaScript que contém elementos como tipagem estática e decoradores em classes"
                  className="w-16 h-16 items-center	justify-center	flex-wrap flex"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <img
                  src={jsLogo}
                  alt="Logo do JavaScript"
                  title="JavaScript é a linguagem de programação que é executada do lado do cliente nos navegadores"
                  className="w-16 h-16 rounded-md items-center	justify-center	flex-wrap flex"
                />
              </Grid>
            </Grid>{" "}
          </span>
          <span className="pt-10 flex ">
            {" "}
            <Grid
              container
              className="justify-center flex flex-column items-center pl-20"
            >
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <img
                  src={includesMySql}
                  alt="Conditional Logo do MySQL"
                  title="MySQL é um sistema gerenciador de banco de dados relacional da Oracle"
                  className="w-24 h-16"
                />
              </Grid>
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <img
                  src={htmlLogo}
                  alt="Badge do HTML5"
                  title="HTML é a linguagem de marcação que permite que você veja esse site e todos os outros sites da web"
                  className="w-20 h-24 flex mr-16"
                />
              </Grid>
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <img
                  src={cssLogo}
                  alt="Badge do CSS3"
                  title="CSS são as folhas de estilo que permitem que os sites que você navega sejam estilizados"
                  className="w-16 h-20"
                />
              </Grid>
            </Grid>{" "}
          </span>
        </div>
        <div className="pt-10">
          <h2 className="z-10 text-white text-center text-2xl font-extralight bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3  " >
            {" "}
            Projetos
          </h2>
          <span className="pt-10">
            <Grid container className="pt-10">
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <Link to="/">
                  <img
                    src={defaultImg}
                    alt="Place image..."
                    title="This project was made with ..., ... and ... and designed to attend the client needs"
                    className="flex w-44 h-32 object-cover rounded-sm"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <Link to="/">
                  <img
                    src={defaultImg}
                    alt="Place image..."
                    title="This project was made with ..., ... and ... and designed to attend the client needs"
                    className="flex w-44 h-32 object-cover rounded-sm"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <Link to="/">
                  <img
                    src={defaultImg}
                    alt="Place image..."
                    title="This project was made with ..., ... and ... and designed to attend the client needs"
                    className="flex w-44 h-32 object-cover rounded-sm"
                  />
                </Link>
              </Grid>
            </Grid>
          </span>
        </div>
        <div className="pt-10">
          <h2 className="z-10 text-white text-center text-2xl font-extralight bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3  ">
            Experiências
          </h2>
          <pre className="pt-5 text-white text-center">
            <h3 className="font-light">Position</h3>
            <span className="font-thin">Workplace</span>
            <p className="font-thin">From - to </p>
          </pre>
          <pre className="pt-5 text-white text-center">
            <h3 className="font-light">Position</h3>
            <span className="font-thin">Workplace</span>
            <p className="font-thin">From - to </p>
          </pre>
          <pre className="pt-5 text-white text-center">
            <h3 className="font-light">Position</h3>
            <span className="font-thin">Workplace</span>
            <p className="font-thin pb-10">From - to </p>
          </pre>
        </div>
      </main>
      <Footer />
    </>
  );
};
