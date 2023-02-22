import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiMenu, FiCheckSquare, FiUsers, FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import style from './NavMobile.css'

export default function NavMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mobileNav">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {FiMenu()}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={style}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/general" className="flex items-center">
            <p className="mr-3">MY TO-DO </p>
            {FiCheckSquare()}
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/friends" className="flex items-center">
            <p className="mr-3">FRIENDS</p>
            {FiUsers()}
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/about" className="flex items-center">
            <p className="mr-3">ABOUT</p>
            {FiHeart()}
          </NavLink>
        </MenuItem>
      </Menu>


    </div>
  );
}
