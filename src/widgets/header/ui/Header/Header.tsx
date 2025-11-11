import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { Button, Logo, LogoTitle } from "../../../../shared/ui";
import burgerMenu from "../../../../shared/assets/images/icons/burgerMenu.svg";
import { useState } from "react";
import { MobileMenu } from "../../../header-menu/ui/MobileMenu";

export const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const handleToggleMenu = () => {
    setIsModal(!isModal);
  };

  return (
    <header className="bg-white flex border-b-1 border-neutral-50 mb-5 md:mb-5 lg:mb-8">
      <nav className="flex container h-[64px] justify-between">
        <div className="flex">
          <div className="flex gap-3 items-center">
            <div className="flex md:mr-10">
              <Logo />
              <LogoTitle />
            </div>
            <NavLink className="sm:flex md:hidden mr-2" to="/questions">
              Preparation
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  "hidden md:flex mr-2 text-sm lg:text-base",
                  isActive
                    ? "text-primary-700 font-semibold bg-neutral-25 py-2 px-4 rounded-lg"
                    : "text-neutral-700 hover:text-primary-700"
                )
              }
              to="/questions"
            >
              Interview Questions
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  "hidden md:flex mr-2 text-sm lg:text-base",
                  isActive
                    ? "text-primary-700 font-semibold bg-neutral-25 py-2 px-4 rounded-lg"
                    : "text-neutral-700 hover:text-primary-700"
                )
              }
              to="/training"
            >
              Interview Trainer
            </NavLink>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Link className="text-primary-700 font-semibold" to="/sign-in">
            <span className="font-semibold">Login</span>
          </Link>
          <Link to="/sign-up">
            <Button className="bg-primary-700 px-6 py-3 text-neutral-25 cursor-pointer hover:bg-primary-800">
              Registration
            </Button>
          </Link>
        </div>
        <div className="flex lg:hidden items-center">
          <img
            className="w-6 h-6 text-primary-700 cursor-pointer"
            src={burgerMenu}
            alt="Menu icon"
            onClick={handleToggleMenu}
          />
        </div>
      </nav>
      <MobileMenu isOpen={isModal} onClose={handleToggleMenu} />
    </header>
  );
};
