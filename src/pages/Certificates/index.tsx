import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const Certificates = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black pt-10 text-white">
        <h2
          className="z-10 text-white text-center text-2xl font-light bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text rounded-md p-3  "
        >
          {" "}
          Certificados{" "}
          <LabelImportantIcon className="text-purple-500 justify-center flex content-center items-center content-center self-center text-2xl object-fit" />
        </h2>{" "}
        <div className="mt-5 flex flex-col justify-center text-center pb-10">
          <h3 className="font-poppins p-5 hover:text-yellow-500">
            {" "}
            O Curso Completo de Banco de Dados e SQL, sem mistérios{" "}
            <DescriptionIcon className="text-white" />{" "}
          </h3>
          <span className="font-extralight p-5">
            {" "}
            Código de verificação: <br />
            UC-f264-f320-11d4-404d-a411-92ed1e699c2f{" "}
          </span>
          <span className="font-thin max-w-sm flex flex-col self-center">
            {" "}
            O curso ministrado por Felipe Mafra (que já foi DBA) contém tudo que
            é necessário para trabalhar com bancos de dados relacionais (SQL) e
            mais um pouco.
          </span>{" "}
          <p className="font-thin max-w-sm flex flex-col self-center">
            Neste curso, é discorrido em teoria, prática e mapas mentais e em
            detalhes, os paradigmas da linguagem SQL, seus propósitos,
            usabilidade no dia-a-dia, como fazer queries eficientes, como
            selecionar exatamente o que se deseja num banco de dados sem
            comprometer performance.
          </p>
        </div>
        <div className="mt-5 flex flex-col justify-center text-center pb-10">
          <h3 className="font-poppins p-5 hover:text-yellow-500">
            {" "}
            Microsoft Power BI Para Data Science{" "}
            <DescriptionIcon className="text-white" />{" "}
          </h3>
          <span className="font-extralight p-5">
            {" "}
            Código de verificação: <br /> 62f8a09ae32fc394b4095d5f{" "}
          </span>
          <span className="font-thin max-w-sm flex flex-col self-center">
            {" "}
            O curso é ministrado por um profissional com mais de uma década de
            experiência, Daniel Mendes, com diversas informações práticas para
            além da ferramenta.
          </span>{" "}
          <p className="font-thin max-w-sm flex flex-col self-center">
            Um curso essencialmente prático, que além da ferramenta que carrega
            no nome, traz insights do campo de ciência e análise de dados,
            explorando o tripé que sustenta a ciência de dados: estatística
            (inferencial, descritiva) + ciência da computação (linguagens R,
            Python e SQL) + conhecimento das áreas de negócio (solução de
            problemas e softskils usadas no dia a dia).
          </p>
        </div>
        <div className="mt-5 flex flex-col justify-center text-center pb-10">
          <h3 className="font-poppins p-5 hover:text-yellow-500">
            {" "}
            Big Data Fundamentos <DescriptionIcon className="text-white" />{" "}
          </h3>
          <span className="font-extralight p-5">
            {" "}
            Código de verificação: <br /> 628f41e2e32fc374f95179ec{" "}
          </span>
          <span className="font-thin max-w-sm flex flex-col self-center">
            {" "}
            O curso é ministrado pelo mesmo profissional de referência do curso
            acima: Daniel Mendes.
          </span>{" "}
          <p className="font-thin max-w-sm flex flex-col self-center">
            Um curso teórico, que oferece as bases para o curso seguinte,
            discursando sobre os principais conceitos que são usados quando se
            fala de Big Data, englobando desde a definição do termo a
            tecnologias usadas e demonstrações práticas como produtos AWS.
            Outras definições como data warehouse, datalake e seus usos reais
            são vistos no curso, exemplos de clusters reais, ordens de grandeza
            (exabytes, petabytes...) dentre outros.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
