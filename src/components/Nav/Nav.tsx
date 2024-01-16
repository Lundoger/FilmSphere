import Link from "next/link"
import Image from 'next/image'
import { CircleUserRound } from "lucide-react"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import classNames from "classnames"
import Hamburger from "@/components/Nav/components/Hamburger"
import { useRouter } from "next/router"
import SearchForm from "@/components/Nav/components/Search"

const Nav = () => {
	const { menuToggle } = useActions();
	const { openedMenu } = useAppSelector((state) => state.toggleReducer);
	const { pathname } = useRouter()
	const links = [
		{ href: '/', content: 'Home',},
		{ href: '/movies', content: 'Movies',},
		{ href: '/serials', content: 'Serials',},
		{ href: '/cartoons', content: 'Cartoons',},
	]

	return (
		<header className={classNames(openedMenu && 'menu-open', 'header')}>
			<div className="header__container">
				<Link href="/" className="header__logo">
					<Image
						fill
						src="/assets/icons/logo.svg"
						alt="FilmSphere"
						priority={true}
					/>
				</Link>
				<nav className="header__menu menu">
					<ul className="menu__list">
						{links.map((link, i) => {
							const isCurrentPage = pathname === link.href
							return (
								<li key={i} className="menu__item">
									<Link href={link.href} className={classNames("menu__link", isCurrentPage && "menu__link--active")}>{link.content}</Link>
								</li>
							)
						})}
					</ul>
				</nav>
				<Hamburger />
				<div className="header__actions">
					<SearchForm/>
					<Link href="" className="header__account"><CircleUserRound color="#fbfffe" /><span>Sign in</span></Link>
					<button onClick={() => menuToggle(!openedMenu)} type="button" className='menu__icon icon-menu'><span></span></button>
				</div>
			</div>
		</header>
	)
}

export default Nav;
