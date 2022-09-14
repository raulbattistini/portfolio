import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const ContactMe = () => {
  const email = "myemail@example.com";
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
                Muito prazer, meu nome é Raul <br /> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fuga a nobis voluptatibus autem
                quasi dolor aperiam praesentium facere, maiores quae numquam
                esse ut dignissimos! Totam officia corporis ipsa amet
                laboriosam?
              </p>
              <p className="text-white text-center text-lg font-thin pb-10 m-0 justify-center flex flex-column ">
                my preeview text handmade <br /> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fuga a nobis voluptatibus autem
                quasi dolor aperiam praesentium facere, maiores quae numquam
                esse ut dignissimos! Totam officia corporis ipsa amet
                laboriosam?
              </p>
              <p className="text-white text-center text-lg font-thin pb-10 m-0 justify-center flex flex-column ">
                my preeview text handmade <br /> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fuga a nobis voluptatibus autem
                quasi dolor aperiam praesentium facere, maiores quae numquam
                esse ut dignissimos! Totam officia corporis ipsa amet
                laboriosam?
              </p>
            </article>
          </div>
        </>
      </div>

      <Footer />
    </>
  );
};
