import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FiCheckSquare, FiUsers, FiHeart } from "react-icons/fi";
import NavMobile from "./NavMobile";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-10/12 mx-auto font-main text-2xl text-stone-600 bg-red-50 drop-shadow-xl rounded-2xl py-2 my-4">
      <NavLink to="*">
        <Logo />
      </NavLink>

      <div className="flex justify-between items-center w-2/3 mr-[30px] lg:hidden">
        <NavLink to="/general" className="flex items-center">
          <p className="mr-3">MY TO-DO </p>
          {FiCheckSquare()}
        </NavLink>
        <NavLink to="/friends" className="flex items-center">
          <p className="mr-3">FRIENDS</p>
          {FiUsers()}
        </NavLink>
        <NavLink to="/about" className="flex items-center">
          <p className="mr-3">ABOUT</p>
          {FiHeart()}
        </NavLink>
      </div>

      <NavMobile />
    </div>
  );
}
