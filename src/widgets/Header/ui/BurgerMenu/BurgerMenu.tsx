import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import { CSSTransition } from "react-transition-group"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback, useEffect } from "react"
import { links } from "./config/config"
import { useBodyLock } from "@/hooks/useBodyLock"

const BurgerMenu = () => {
    const { openedMenu } = useAppSelector(state => state.toggleReducer)
    const { menuToggle } = useActions()
    const { pathname, events } = useRouter()

    const handleRouteChange = useCallback(() => {
        menuToggle(false)
    }, [menuToggle])

    //при переходе на какуюто страницу закрываем бургер и тоглим стейт в 'false'
    useEffect(() => {
        events.on("routeChangeComplete", handleRouteChange)
    }, [])

    useBodyLock(openedMenu)

    return (
        <nav className="burger-menu">
            <ul className="burger-menu__list">
                {links.map((link, i) => {
                    const isCurrentPage = pathname === link.href

                    return (
                        <CSSTransition
                            classNames={{ enterDone: "burger-menu__item--done" }}
                            in={openedMenu}
                            key={i}
                            timeout={link.timeout}
                        >
                            <li className="burger-menu__item">
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "burger-menu__link",
                                        isCurrentPage && "burger-menu__link--active"
                                    )}
                                >
                                    {link.content}
                                </Link>
                            </li>
                        </CSSTransition>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BurgerMenu
