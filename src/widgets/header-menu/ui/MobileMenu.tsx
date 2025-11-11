import { useEffect } from "react";
import { Filters } from "../../questionFilters";
import closeIcon from "../../../shared/assets/images/icons/closeIcon.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="lg:hidden fixed top-[65px] bg-white right-0 z-50 w-4/5 max-w-[328px] shadow-lg transform transition-transform duration-300 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <img
            className="w-[20px] h-[20px] mr-6 mt-[16px] cursor-pointer"
            src={closeIcon}
            alt="Close icon"
            onClick={onClose}
          />
        </div>
        <div className="p-6 pt-2">
          <Filters />
        </div>
      </div>
    </div>
  );
};
