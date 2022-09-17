import { Grid } from "@mui/material";
import { FiDatabase } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";

export const Blog = () => {
  const hashnode1stSeries = 'https://raulbattistini.hashnode.dev/series/css-options';
  const hashnode2ndSeries = 'https://raulbattistini.hashnode.dev/series/typescript-javascript';
  const hashnode3rdSeries = 'https://raulbattistini.hashnode.dev/series/databases';
  return (
    <div className="bg-black h-fit">
      <Navbar />
      <div className="pt-10 flex justify-center items-center flex-col h-96 mr-5 ml-5">
        <h2
          className="text-white font-light flex flex-col max-w-xs text-2xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text p-3  "
        >
          Compartilhando meu conhecimento sobre aquilo que gosto.
        </h2>
        <span className="font-extralight text-white flex justify-between pt-3 pb-10">
          Nessa seção, você vai encontrar artigos sobre Javascript, Typescript,
          React, NodeJs e MySQL. <br />
          Meu propósito em escrever é fazer todos partirem de um ponto a frente
          do que comecei.
        </span>
      </div>
      <div className="pt-10 ">
        <Grid container className="pb-10">
          <Grid item xs={3} className="tablet:pt-10  phone:pt-12">
            <FaCss3Alt className="w-40 h-28 object-cover ml-8 rounded-md mb-3 relative text-white tablet:w-28 tablet:h-16 phone:w-28 phone:h-16 pocket:w-20 pocket:h-12 tablet:ml-0 phone:ml-0 pocket:ml-0 pocket:mt-12" />
          </Grid>
          <Grid item xs={9}>
            <div className="text-white flex flex-col justify-between pt-5 relative ">
              
                <h4 className="text-white flex flex-col justify-between font-light bg-gradient-to-r from-indigo-500 to-red-500 pl-3 rounded-l-sm hover:text-yellow-500"
                onClick={()=>{window.location.assign(hashnode1stSeries)}}>
                  Estilizando projetos
                </h4>
              <span className="font-extralight pocket:text-sm">
                Por ser algo que todos têm contato em algum momento, decidi
                falar sobre CSS e algumas alternativas que existem,
                principalmente para quem se identifica comigo e não gosta de
                criar telas
              </span>
            </div>
          </Grid>
          <Grid item xs={3} className="pt-5 pocket:pt-12">
            <SiTypescript className="justify-center flex w-16 h-12 object-cover ml-12 mb-3 relative text-white tablet:text-lg phone:text-lg pocket:text-lg tablet:ml-3 phone:ml-3 pocket:ml-0" />
            <SiJavascript className="w-16 h-12 object-cover mb-3 text-white rounded-lg ml-24 tablet:text-lg phone:text-lg pocket:text-lg tablet:ml-8 phone:ml-8 pocket:ml-2" />
          </Grid>
          <Grid item xs={9}>
            <div className="text-white flex flex-col justify-between pt-5 relative">
              
                <h4 className="text-white flex flex-col justify-between font-light bg-gradient-to-r from-indigo-500 to-red-500 pl-3 rounded-l-sm hover:text-yellow-500"
                onClick={()=>{window.location.assign(hashnode2ndSeries)}}>
                  Typescript ou Javascript?
                </h4>{" "}
              <span className="font-extraligh pocket:text-sm">
                O caminho padrão que todos são ensinados a começar no
                desenvolvimento web é com HTML/ CSS, depois partir para o
                JavaScript. Essa é a única forma?
              </span>
            </div>
          </Grid>
          <Grid item xs={3} className="tablet:pt-10 phone:pt-12">
            <FiDatabase  className="w-40 h-28 object-cover ml-8 rounded-md mb-3 relative text-white tablet:w-28 tablet:h-16 phone:w-28 phone:h-16 pocket:w-20 pocket:h-12 tablet:ml-0 phone:ml-0 pocket:ml-0 pocket:mt-24" />
          </Grid>
          <Grid item xs={9}>
            <div className="text-white flex flex-col justify-between pt-5 relative">
                <h4 className="text-white flex flex-col justify-between font-light bg-gradient-to-r from-indigo-500 to-red-500 pl-3 rounded-l-sm hover:text-yellow-500"
                onClick={()=>{window.location.assign(hashnode3rdSeries)}}>
                  Construí todo o projeto, e agora? Onde armazenar?
                </h4>
              <span className="font-extralight pocket:text-sm">
                Se não houvesse onde se armazenar dados, a web seria um
                arquipélago de sites estáticos, se é que teria existido. Graças
                aos bancos de dados, não é assim que a web funciona. E qual
                escolher?
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};
