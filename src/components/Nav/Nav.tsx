import Link from "next/link"
import Image from 'next/image'
import { CircleUserRound, Search } from "lucide-react"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import classNames from "classnames"
import Hamburger from "./components/Hamburger"

const Nav = () => {
	const { menuToggle } = useActions()
	const { openedMenu } = useAppSelector(state => state.toggleReducer)

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
						<li className="menu__item"><Link href="/" className="menu__link">Home</Link></li>
						<li className="menu__item"><Link href="/films" className="menu__link">Movies</Link></li>
						<li className="menu__item"><Link href="/serials" className="menu__link">Serials</Link></li>
						<li className="menu__item"><Link href="/cartoons" className="menu__link">Cartoons</Link></li>
					</ul>
				</nav>
				<Hamburger/>
				<div className="header__actions">
					<button className="header__search">
						<Search color="#fbfffe" />
					</button>
					<Link href="" className="header__account"><CircleUserRound color="#fbfffe" /><span>Sign in</span></Link>
					<button onClick={() => menuToggle()} type="button" className='menu__icon icon-menu'><span></span></button>
				</div>
			</div>
		</header>
	)
}

export default Nav