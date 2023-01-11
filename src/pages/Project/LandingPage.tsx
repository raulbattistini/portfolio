import React from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import project1 from "../../assets/images/project1.png";

export const LandingPageProject = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-full">
        <main className="bg-black w-full flex justify-center pt-10">
          <div className="flex flex-col w-96 h-96 pt-4 pl-2 bg-gradient-to-b from-indigo-500 to-transparent rounded-md object-cover hover:scale-125 duration-300 tablet:w-44 tablet:h-40 phone:w-32 phone:h-28 pocket:w-24 pocket:h-20 pocket:pt-5 cursor-pointer">
            <img
              src={project1}
              alt="Printscreen do deploy feito na Vercel"
              title="Esse projeto foi feito com React, TailwindCSS e Typescript para ver como o TailwindCSS interagia com a minha stack atual"
              className="flex w-3/4 h-88 object-fit ml-10 rounded-sm tablet:pr-2 phone:pr-2 pocket:pr-2"
            />
            <span className="text-center text-white pt-4 text-xl flex flex-col ">
              {" "}
              Landing page em homenagem à 1ª programadora Ada Lovelace{" "}
            </span>
            <span className="text-center text-white pt-4 text-sm font-thin flex flex-col ">
              Um projeto simples, que utilizei React e TailwindCSS para
              estilização.
            </span>
          </div>
        </main>
        <div className="flex justify-center pt-2 bg-black pb-5">
          <section className="w-2/5 px-10 pt-3 pb-3 bg-gradient-to-b from-indigo-500 to-purple-700 rounded-sm">
            <span className="text-center text-white font-thin ">
              Existe um ponto em dizer que React para uma landing page seria
              'overkill' e Gatsby ou outro gerador de páginas estáticas faria
              mais sentido. Outra abordagem seria fazer uso de uma CMS servindo uma
              API REST no back-end. O mais é conteúdo para o blog.
            </span>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
