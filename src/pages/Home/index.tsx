import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project-thumbnail.png";

export const Home = () => {
  const repo1Link = "https://github.com/raulbattistini/landingPage";
  const repo2Link = "https://github.com/raulbattistini/ebdoceria";
  const repo3Link = "https://github.com/raulbattistini/estate";
  return (
    <>
      <Navbar />
      <main className="bg-black w-full">
        <div className="pt-10">
          <h2
            className="z-10 text-white text-center text-2xl font-light bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3  "
          >
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
                <DiReact
                  className="text-white text-7xl items-center	justify-center flex-wrap flex hover:text-indigo-500"
                  title="React é uma library de Javascript feita para construção de páginas client-side no modelo SPA (single-page application)"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <FaNodeJs
                  className="text-white text-6xl items-center	justify-center flex-wrap flex hover:text-indigo-500"
                  title="NodeJs é um runtime de Javascript que permite à linguagem ser rodada do lado do servidor de forma eficiente, graças ao seu Input/Output não-bloqueante"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <SiTypescript
                  title="Typescript é um superset de JavaScript que contém elementos como tipagem estática e decoradores em classes"
                  className="text-white text-6xl items-center	justify-center flex-wrap flex hover:text-indigo-500"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <SiJavascript
                  title="JavaScript é a linguagem de programação que é executada do lado do cliente nos navegadores"
                  className="text-white text-6xl items-center	justify-center flex-wrap flex rounded-sm hover:text-indigo-500"
                />
              </Grid>
            </Grid>{" "}
          </span>
          <span className="flex justify-around">
            {" "}
            <Grid container className="pt-8">
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <GrMysql
                  title="MySQL é um sistema gerenciador de banco de dados relacional de propriedade da Oracle Inc."
                  className="object-cover text-white text-6xl items-center	justify-center flex-wrap flex hover:text-indigo-500 pocket:absolute"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <DiHtml5
                  className="text-white text-7xl mr-2 items-center	justify-center flex-wrap flex hover:text-indigo-500 pocket:absolute object-cover"
                  title="HTML é a linguagem de marcação que permite que você veja esse site e todos os outros sites da web"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <FaCss3Alt
                  className="text-white text-7xl mr-2 items-center	justify-center flex-wrap flex hover:text-indigo-500 pocket:absolute  pocket:pt-1"
                  title="CSS são as folhas de estilo que permitem que os sites que você navega sejam estilizados"
                />
              </Grid>
              <Grid
                item
                xs={3}
                className="items-center	justify-center	flex-wrap flex"
              >
                <SiPostgresql
                  title="PostgreSQL (ou Postgres) é um banco de dados open-source robusto."
                  className="text-white text-6xl items-center	justify-center flex-wrap flex rounded-sm hover:text-indigo-500"
                />
              </Grid>
            </Grid>{" "}
          </span>
        </div>
        <div className="pt-10">
          <h2
            className="z-10 text-white text-center text-2xl font-light bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3  "
          >
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
                <div className="flex flex-col w-56 h-52 pt-4 pl-2 bg-gradient-to-b from-indigo-500 to-transparent rounded-md object-cover hover:scale-125 duration-300 tablet:w-44 tablet:h-40 phone:w-32 phone:h-28 pocket:w-24 pocket:h-20 pocket:pt-5 cursor-pointer">
                  <h4 className="text-center flex flex-col text-white justify-between pb-2 phone:text-sm pocket:text-xs pocket:pb-5">
                    {" "}
                    Concluído ✔️{" "}
                  </h4>
                  <Link to="/landing-page-project">
                    <img
                      src={project1}
                      alt="Printscreen do deploy feito na Vercel"
                      title="Esse projeto foi feito com React, TailwindCSS e Typescript para ver como o TailwindCSS interagia com a minha stack atual"
                      className="flex w-52 h-32 object-fit rounded-sm tablet:pr-2 phone:pr-2 pocket:pr-2"
                    />
                  </Link>
                  <span
                    className="text-center flex flex-col text-white pt-2"
                    onClick={() => {
                      window.location.assign(repo1Link);
                    }}
                  >
                    {" "}
                    Ver no Github
                  </span>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <div className="flex flex-col w-56 h-52 pt-4 pl-2 bg-gradient-to-b from-indigo-500 to-transparent rounded-md object-cover hover:scale-125 duration-300 tablet:w-44 tablet:h-40 phone:w-32 phone:h-28 pocket:w-24 pocket:h-20 pocket:pt-1 cursor-pointer">
                  <h4 className="text-center flex flex-col text-white justify-between pb-2 phone:text-sm pocket:text-xs pocket:pt-2 pocket:mb-1">
                    {" "}
                    Em construção⌛{" "}
                  </h4>
                  <Link to="/eb-doceria-project">
                    <img
                      src={project2}
                      alt="Printscreen localhost de EB Doceria Gourmet"
                      title="Essse projeto está sendo feito com React, Node, Postgres, TailwindCSS e Typescript."
                      className="flex w-52 h-32 object-fit rounded-sm tablet:pr-2 phone:pr-2 pocket:pr-2"
                    />
                  </Link>
                  <span
                    className="text-center flex flex-col text-white pt-2"
                    onClick={() => {
                      window.location.assign(repo2Link);
                    }}
                  >
                    <Link to="https://github.com/raulbattistini/ebdoceria">
                      {" "}
                      Ver no Github{" "}
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                className="items-center	justify-center	flex-wrap flex"
              >
                <div className="flex flex-col w-56 h-52 pt-4 pl-2 bg-gradient-to-b from-indigo-500 to-transparent rounded-md object-cover hover:scale-125 duration-300 tablet:w-44 tablet:h-40 phone:w-32 phone:h-28 pocket:w-24 pocket:h-20 pocket:pt-1 cursor-pointer">
                  <h4 className="text-center flex flex-col text-white justify-between pb-2 phone:text-sm pocket:text-xs pocket:pt-2 pocket:mb-1">
                    {" "}
                    Em construção⌛{" "}
                  </h4>
                  <Link to="/estate-project">
                    <img
                      src={project3}
                      alt="Estate project..."
                      title="Sistema web para imobiliárias feito com minha stack base."
                      className="flex w-52 h-32 object-fit rounded-sm tablet:pr-2 phone:pr-2 pocket:pr-2"
                    />
                  </Link>
                  <span
                    className="text-center flex flex-col text-white pt-2 cursor-pointer"
                    onClick={() => {
                      window.location.assign(repo3Link);
                    }}
                  >
                    {" "}
                    Ver no Github{" "}
                  </span>
                </div>
              </Grid>
            </Grid>
          </span>
        </div>
        <div className="pt-10">
          <h2
            className="z-10 text-white text-center text-2xl font-light bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3 pocket:pt-12 "
          >
            Experiências
          </h2>
          <pre className="pt-5 text-white text-center">
            <h3 className="font-light">Freelancer</h3>
            <span className="font-thin">Autônomo</span>
            <p className="font-thin">03/2020 - 02/2022 </p>
          </pre>
          <pre className="pt-5 text-white text-center">
            <h3 className="font-light">Analista de Sistemas</h3>
            <span className="font-thin">City Connect</span>
            <p className="font-thin"> 04/2022 - 10/2022 </p>
          </pre>
          <pre className="pt-5 text-white text-center">
            <h3 className="font-light">Analista de Sistemas</h3>
            <span className="font-thin">DMK3</span>
            <p className="font-thin pb-10">10/2022 - </p>
          </pre>
        </div>
      </main>
      <Footer />
    </>
  );
};
