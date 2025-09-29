import { Outlet } from "react-router-dom";
import { Footer } from "../../../../footer/ui";
import { Header } from "../../../../header/ui";
import type { FC, ReactNode } from "react";

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow">{children || <Outlet />}</main>
      <Footer />
    </>
  );
};
