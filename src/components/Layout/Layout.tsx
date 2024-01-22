import { FC, PropsWithChildren } from "react";
import Nav from "@/components/Nav/Nav";
import SearchModal from "../SearchModal/SearchModal";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="main">{children}</main>
	  <SearchModal/>
    </>
  );
};
