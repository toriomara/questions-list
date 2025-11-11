import { Link } from "react-router-dom";
import yeahub from "@/shared/assets/images/yeahub.svg";

export const LogoTitle = () => {
  return (
    <Link to="/">
      <div className="hidden md:flex items-center p-[5px]">
        <img src={yeahub} alt="Logo" />
      </div>
    </Link>
  );
};
