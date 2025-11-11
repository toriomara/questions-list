import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../../header/ui";
import { Footer } from "../../../../footer/ui";

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};
