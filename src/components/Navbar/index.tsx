import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useInView, InView } from "react-intersection-observer";

export const Navbar = () => {
  const [ref, inView] = useInView({
    rootMargin: "0px",
    threshold: 1,
    initialInView: true,
    delay: 10
  });

  return (
    <div ref={ref} className="ease-in-out	">
      <div>
        {!inView && (
          <section className="default top-0 sticky middle ">
            <Grid
              container
              className="grid bg-black-rgba font-thin top-0 fixed lazy text-white text-2xl pb-3 pt-3"
            >
              <Grid item xs={4}>
                <div className="ml-5 flex hover:text-[#4567ff]">
                  <Link to="/">Raul Battistini</Link>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="align-center text-center">
                  <Grid container>
                    <Grid item xs={4} className="hover:text-[#4567ff]">
                      Tecnologias
                    </Grid>
                    <Grid item xs={4} className="hover:text-[#4567ff]">
                      Projetos
                    </Grid>
                    <Grid item xs={4} className="hover:text-[#4567ff]">
                      Experiência
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="flex flex-end float-right mr-5 hover:text-[#4567ff]">
                  <Link to="/contact">
                    {" "}
                    Entrar em contato{" "}
                    <ArrowForwardIosIcon className="justify-center" />
                  </Link>
                </div>
              </Grid>
            </Grid>
          </section>
        )}
        <section className="default top" ref={ref}>
          <Grid
            container
            className="grid bg-[#272727] font-thin text-white text-2xl pb-3 pt-3"
          >
            <Grid item xs={4}>
              <div className="ml-5 flex hover:text-[#4567ff]">
                <Link to="/">Raul Battistini</Link>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="align-center text-center">
                <Grid container>
                  <Grid item xs={4} className="hover:text-[#4567ff]">
                    Tecnologias
                  </Grid>
                  <Grid item xs={4} className="hover:text-[#4567ff]">
                    Projetos
                  </Grid>
                  <Grid item xs={4} className="hover:text-[#4567ff]">
                    Experiência
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="flex flex-end float-right mr-5 hover:text-[#4567ff]">
                <Link to="/contact">
                  {" "}
                  Entrar em contato{" "}
                  <ArrowForwardIosIcon className="justify-center" />
                </Link>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  );
};
