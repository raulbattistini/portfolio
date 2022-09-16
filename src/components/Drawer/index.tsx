import React from "react";
import defaultImg from "../../assets/images/default.jpg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const Drawer = () => {
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

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, justifyContent: "center" }}
        >
          <Avatar alt="Remy Sharp" src={defaultImg} className="test" />
        </IconButton>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, justifyContent: "center" }}
        >
          <MenuIcon className="hd" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem>
            <button>
              {" "}
              <Link
                to="/blog"
                className="text-white"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Blog
              </Link>
            </button>
          </MenuItem>
          <MenuItem>
            <Typography
              textAlign="center"
              onClick={clearCache}
              sx={{ color: "#6D70E0" }}
            >
              {" "}
              Sair{" "}
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
