import React from "react";
import { Navbar } from "../../components/Navbar";
import project2 from "../../assets/images/project2.png";
import { Footer } from "../../components/Footer";

export const EBDoceria = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-full">
        <main className="bg-black w-full flex justify-center pt-10">
          <div className="flex flex-col w-96 h-96 pt-4 pl-2 bg-gradient-to-b from-indigo-500 to-transparent rounded-md object-cover hover:scale-125 duration-300 tablet:w-44 tablet:h-40 phone:w-32 phone:h-28 pocket:w-24 pocket:h-20 pocket:pt-5 cursor-pointer">
            <img
              src={project2}
              alt="Printscreen do deploy feito na Vercel"
              title="Esse projeto foi feito com React, TailwindCSS e Typescript para ver como o TailwindCSS interagia com a minha stack atual"
              className="flex w-3/4 h-88 object-fit ml-10 rounded-sm tablet:pr-2 phone:pr-2 pocket:pr-2"
            />
            <span className="text-center text-white pt-4 text-xl flex flex-col px-3">
              {" "}
              Website para um delivery de comida artesanal{" "}
            </span>
            <span className="text-center text-white pt-4 text-sm font-thin flex flex-col ">
              Um projeto que está sendo utilizado React, Node, Postgres e
              Typescript.
            </span>
          </div>
        </main>
        <div className="flex justify-center pt-2 bg-black pb-5">
          <section className="w-2/5 px-10 pt-3 pb-3 bg-gradient-to-b from-indigo-500 to-purple-700 rounded-sm">
            <span className="text-white font-thin flex-col flex">
              Ambiente de produção: está ao ar em{" "}
              <span
                className="cursor-pointer text-yellow-300"
                onClick={() =>
                  window.location.assign("http://elisabetebattistini.com:5000")
                }
              >
                {" "}
                http://elisabetebattistini.com:5000
              </span>{" "}
              (sem SSL no momento, será adicionado em breve).
            </span>
            <span className="text-white font-thin flex-col flex pt-2">
              O website está rodando numa VPS configurada com Apache (Ubuntu) e
              PM2. A API está sendo desenvolvida em Node.
            </span>
            <span className=" text-white font-thin flex-col flex pt-2">
              Em breve, um artigo no blog comentando como foi o desenvolvimento
              desse projeto.
            </span>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
