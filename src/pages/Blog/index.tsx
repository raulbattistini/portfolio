import { Grid } from "@mui/material";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import defaultImg from "../../assets/images/default.jpg";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="bg-black h-fit">
      <Navbar />
      <div className="pt-10 flex justify-center items-center flex-col h-96">
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
          <Grid item xs={3}>
            <img
              src={defaultImg}
              alt="Place image..."
              className="w-40 h-28 object-cover ml-8 rounded-md mb-3 relative"
              title="A description about the technology series"
            />
          </Grid>
          <Grid item xs={9}>
            <div className="text-white flex flex-col justify-between pt-5 relative ">
              <h4 className="text-white flex flex-col justify-between font-light bg-gradient-to-r from-indigo-500 to-red-500 pl-3 rounded-sm hover:text-yellow-500">
                The complete title for the post series
              </h4>
              <span className="font-extralight">
                Brief description to be finished with three dots...
              </span>
              <span className="font-thin">
                <Link
                  to="https://raulbattistini.hashnode.dev/"
                  className="font-thin"
                >
                  {" "}
                  Brief description to be finished with three dots...
                </Link>
              </span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <img
              src={defaultImg}
              alt="Place image..."
              className="w-40 h-28 object-cover ml-8 rounded-md mb-3 relative"
              title="A description about the technology series"
            />
          </Grid>
          <Grid item xs={9}>
            <div className="text-white flex flex-col justify-between pt-5 relative">
              <h4 className="text-white flex flex-col justify-between font-light bg-gradient-to-r from-indigo-500 to-red-500 pl-3 rounded-sm hover:text-yellow-500">
                The complete title for the post series
              </h4>
              <span className="font-extralight">
                Brief description to be finished with three dots...
              </span>
              <span className="font-thin">
                <Link
                  to="https://raulbattistini.hashnode.dev/"
                  className="font-thin"
                >
                  {" "}
                  Brief description to be finished with three dots...
                </Link>
              </span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <img
              src={defaultImg}
              alt="Place image..."
              className="w-40 h-28 object-cover ml-8 rounded-md mb-3 relative"
              title="A description about the technology series"
            />
          </Grid>
          <Grid item xs={9}>
            <div className="text-white flex flex-col justify-between pt-5 relative">
              <h4 className="text-white flex flex-col justify-between font-light bg-gradient-to-r from-indigo-500 to-red-500 pl-3 rounded-sm hover:text-yellow-500">
                The complete title for the post series
              </h4>
              <span className="font-extralight">
                Brief description to be finished with three dots...
              </span>
              <span className="font-thin">
                <Link
                  to="https://raulbattistini.hashnode.dev/"
                  className="font-thin"
                >
                  {" "}
                  Brief description to be finished with three dots...
                </Link>
              </span>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};
