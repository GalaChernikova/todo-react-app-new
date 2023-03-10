import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  FiMenu,
  FiCheckSquare,
  FiUsers,
  FiHeart,
  FiLogOut,
  FiSliders
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./NavMobile.css";

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
        className="mobNavButton"
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
      >

        <MenuItem onClick={handleClose}>
          <NavLink to="/general" className="flex items-center">
            {FiCheckSquare()}
            <p className="ml-3 font-main text-stone-600 hover:underline">
              MY TO-DO
            </p>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/friends" className="flex items-center">
            {FiUsers()}
            <p className="ml-3 font-main text-stone-600 hover:underline">
              FRIENDS
            </p>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/about" className="flex items-center">
            {FiHeart()}
            <p className="ml-3 font-main text-stone-600 hover:underline">
              ABOUT
            </p>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/settings" className="flex items-center">
            {FiSliders()}
            <p className="ml-3 font-main text-stone-600 hover:underline">
              SETTINGS
            </p>
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="*" className="flex items-center">
            {FiLogOut()}
            <p className="ml-3 font-main text-stone-600 hover:underline">
              LOGOUT
            </p>
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
