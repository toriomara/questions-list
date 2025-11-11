import { Link } from "react-router-dom";
import logo from "@/shared/assets/images/logo.svg";

export const Logo = () => {
  return (
    <Link to="/">
      <img className="w-full h-full min-w-[33px] min-h-[3px]" src={logo} alt="Yeahub Logo" />
    </Link>
  );
};