import Avatar from "@mui/material/Avatar";
import avatar from "./../../images/avatar.png";

export default function Logo() {
  return (
    <div className="flex items-center text-stone-600 ml-[30px]">
      <Avatar src={avatar} id="avatar"></Avatar>
      <p className="font-title leading-[3] text-xl ml-3 xl:text-base sm:text-sm">my TO-DO app</p>
    </div>
  );
}
