import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

const Hamburger = () => {
	const { openedMenu } = useAppSelector(state => state.toggleReducer)

	return (
		<nav className={classNames('header__burger-menu burger-menu', openedMenu && 'burger-menu--open')}>
			<ul className="burger-menu__list">
				<li className="burger-menu__item"><Link href="/" className="burger-menu__link burger-menu__link--active">Home</Link></li>
				<li className="burger-menu__item"><Link href="/films" className="burger-menu__link">Movies</Link></li>
				<li className="burger-menu__item"><Link href="/serials" className="burger-menu__link">Serials</Link></li>
				<li className="burger-menu__item"><Link href="/cartoons" className="burger-menu__link">Cartoons</Link></li>
			</ul>
		</nav>
	)
}

export default Hamburger