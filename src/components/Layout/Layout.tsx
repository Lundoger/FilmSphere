import { FC, PropsWithChildren } from "react";
import Nav from "@/components/Nav/Nav";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="main">{children}</main>
    </>
  );
};
