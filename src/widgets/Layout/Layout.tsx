import { FC, PropsWithChildren } from "react";
import Header from "@/widgets/Header/Header";
import SearchModal from "@/entities/SearchModal/SearchModal";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="main">{children}</main>
			<SearchModal />
		</>
	)
}
