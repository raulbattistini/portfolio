import React, {useState} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export const Drawer = () => {
  const [selected, setSelected] = useState(false);

  const [open, setOpen] = useState(false);

 
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
    <Box sx={{ flexGrow: 0 }} className="text-black">
      <IconButton
        onClick={handleOpenUserMenu}
        sx={{ p: 0, justifyContent: "center" }}
      >
        <button
          onClick={() => {
            setSelected(!selected);
          }}
        >
          <AiOutlineMenuUnfold className="ultrawide:hidden desktop:hidden laptop:hidden tablet:hidden phone:hidden pocket:text-white cursor-pointer" />
        </button>
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
              style={{ textDecoration: "none", color: "black" }}
            >
              Blog
            </Link>
          </button>
        </MenuItem>
        <MenuItem>
          <button>
            {" "}
            <Link
              to="/certificados"
              className="text-white"
              style={{ textDecoration: "none", color: "black" }}
            >
              Certificados
            </Link>
          </button>
        </MenuItem>
      </Menu>
    </Box>
  </>
  );
};
