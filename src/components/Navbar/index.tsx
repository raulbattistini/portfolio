import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useInView, InView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import defaultImg from "../../assets/images/default.jpg";
import { Drawer } from "../Drawer";

export const Navbar = () => {
  const clearCache = () => {
    window.location.reload();
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    rootMargin: "0px",
    threshold: 1,
    initialInView: true,
    delay: 10,
  });
  return (
    <div ref={ref} className="ease-in-out	font-thin">
      <div>
        {!inView && (
          <section className="default top-0 sticky middle ">
            <Grid
              container
              className="grid bg-black-rgba font-thin top-0 fixed lazy text-white  pb-3 pt-3 z-10"
            >
              <Grid item xs={4}>
                <div className="ml-5 flex text-lg">
                  <Link
                    to="/"
                    className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-lg tablet:text-sm phone:text-xs pocket:text-xs"
                  >
                    Raul Battistini{" "}
                  </Link>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="align-center text-center"></div>
              </Grid>
              <Grid item xs={4}>
                <div className="flex flex-end float-right mr-5 z-10 pb-3">
                  <Link
                    to="/contact"
                    className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 tablet:text-sm  phone:text-xs pocket:text-xs w-fit"
                  >
                    Entrar em contato
                  </Link>
                </div>
              </Grid>
            </Grid>
          </section>
        )}
        <section className="default top" ref={ref}>
          <Grid
            container
            className="grid bg-[#171717] font-thin text-white text-2xl pb-3 pt-3"
          >
            <Grid item xs={4}>
              <div className="ml-5 flex ">
                {" "}
                <button>
                  <AiOutlineMenuUnfold
                    className="ultrawide:hidden desktop:hidden laptop:hidden tablet:hidden phone:hidden pocket:text-white cursor-pointer"
                    onClick={() => {
                      !setOpen;
                    }}
                  />
                </button>
                {open === true ? (
                  <>
                    <Drawer />
                  </>
                ) : (
                  ""
                )}
                <Link
                  to="/"
                  className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-lg tablet:text-sm  phone:text-xs pocket:text-xs pocket:ml-10 pocket:mt-2"
                >
                  Raul Battistini{" "}
                </Link>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="align-center text-center text-lg tablet:text-sm phone:text-xs pocket:hidden">
                <Grid container>
                  <Grid item xs={6}>
                    <Link
                      to="/blog"
                      className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
                    >
                      Blog
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link
                      to="/certificados"
                      className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
                    >
                      {" "}
                      Certificados
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="flex flex-end float-right mr-5">
                <Link
                  to="/contact"
                  className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-lg tablet:text-sm  phone:text-xs pocket:text-xs pocket:pt-2"
                >
                  Entrar em contato
                </Link>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  );
};
