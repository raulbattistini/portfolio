import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const ContactMe = () => {
  const email = "raulbattistini.3@gmail.com";
  return (
    <>
      <Navbar />
      <div className="pt-10 text-white bg-black">
        <>
          <h2 className="z-10 text-white text-center text-2xl font-extralight pb-10 justify-center flex flex-column">
            Entrar em contato
          </h2>
          <span className="font-thin text-white text-center flex flex-column justify-center">
            Além das redes sociais no rodapé, você pode falar comigo pelo email:
          </span>
          <div className="flex justify-center items-center flex-col">
            <a
              href="mailto:{email}"
              className="justify-center font-extralight flex content-center self-center items-center max-w-xs"
            >
              {" "}
              {email}{" "}
            </a>
            <article className="max-w-sm content-center items-center pt-10">
              <h2 className="z-10 text-white text-center text-2xl font-extralight pb-3 justify-center flex flex-column">
                Mais sobre mim:
              </h2>
              <p className="text-white text-center text-lg font-thin pb-3 m-0 justify-center flex flex-column ">
                Muito prazer, meu nome é Raul <br /> Sou desenvolvedor full-stack, comecei no frontend em 2020 com HTML, CSS e JavaScript, eventualmente passei a conhecer a MERN (MongoDB, Express, React, Node) stack e avancei nos estudos.
                Gosto muito do que faço e, embora eu não acredite no 'faça o que você ama', trabalhar com o que se odeia definitivamente não é nada bom (experiência própria).
               </p>
              <p className="text-white text-center text-lg font-thin pb-10 m-0 justify-center flex flex-column ">
               Algumas curiosidades sobre mim: <br /> 
               Gosto de tecnologia e gostaria de ter conhecido mais cedo, até os 16 anos era difícil eu me identificar com algo e pensar o que eu gostaria de fazer da vida. Quando conheci o desenvolvimento web, parecia que tinha finalmente achado algo que fosse gratificante o bastante para fazer.
              </p>
               <span  className="text-white text-center text-lg font-thin pb-10 m-0 justify-center flex flex-row "> Meus hobbies são: academia, xadrez e futebol (só assistindo, porque jogando... dá dó) </span>
            </article>
          </div>
        </>
      </div>

      <Footer />
    </>
  );
};
