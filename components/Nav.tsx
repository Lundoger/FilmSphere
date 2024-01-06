import Link from "next/link"
import Image from 'next/image'
import { Search } from "lucide-react"

const Nav = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Link href="/" className="header__logo">
						<Image layout="fill" src="/assets/icons/logo.svg" alt="FilmSphere" />
				</Link>
				<div className="header__menu menu">
					<button type="button" className="menu__icon icon-menu"><span></span></button>
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item"><a href="" className="menu__link">Home</a></li>
							<li className="menu__item"><a href="" className="menu__link">Movies</a></li>
							<li className="menu__item"><a href="" className="menu__link">Serials</a></li>
							<li className="menu__item"><a href="" className="menu__link">Cartoons</a></li>
						</ul>
					</nav>
				</div>
				<div className="header__actions">
					<button className="header__search">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbfffe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
					</button>
					<Link href="" className="header__account">Sign in</Link>
				</div>
			</div>
		</header>
	)
}

export default Nav