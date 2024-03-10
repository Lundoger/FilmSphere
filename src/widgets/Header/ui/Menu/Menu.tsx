import { links } from "./config/links"
import Link from "next/link"
import clsx from "clsx"
import { useRouter } from "next/router"

const Menu = () => {
    const { pathname } = useRouter()

    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                {links.map((link, i) => {
                    const isCurrentPage = pathname === link.href
                    return (
                        <li key={i} className="menu__item">
                            <Link
                                href={link.href}
                                className={clsx(
                                    "menu__link",
                                    isCurrentPage && "menu__link--active"
                                )}
                            >
                                {link.content}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Menu
