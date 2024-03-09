import { useAppSelector } from "@/hooks/useAppSelector"
import clsx from "clsx"
import BurgerMenu from "./ui/BurgerMenu/BurgerMenu"
import SearchButton from "./ui/SearchButton/SearchButton"
import Menu from "./ui/Menu/Menu"
import Logo from "./ui/Logo/Logo"
import Account from "./ui/Account/Account"
import BurgerButton from "./ui/BurgerButton/BurgerButton"
import useHeaderFixed from "./lib/useHeaderFixed"
import { useRouter } from "next/router"

const Header = () => {
    const { openedMenu } = useAppSelector(state => state.toggleReducer)
    const { isFixed } = useHeaderFixed()
    const { pathname } = useRouter()

    const isMoviePage = pathname === "/film/[id]"

    return (
        <header
            id="header"
            className={clsx(
                openedMenu && "menu-open",
                isFixed && "header--fixed",
                isMoviePage && "header--movie",
                "header"
            )}
        >
            <div className="header__container">
                <Logo />
                <Menu />
                <div className="header__actions">
                    <SearchButton />
                    <Account />
                    <BurgerButton />
                </div>
            </div>
            <BurgerMenu />
        </header>
    )
}

export default Header
