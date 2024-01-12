import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Hamburger = () => {
	const { openedMenu } = useAppSelector(state => state.toggleReducer)
	const { menuToggle } = useActions() 
	const { pathname, events } = useRouter()
	const links = [
		{ href: '/', content: 'Home' },
		{ href: '/movies', content: 'Movies' },
		{ href: '/serials', content: 'Serials' },
		{ href: '/cartoons', content: 'Cartoons' },
	]

	useEffect(() => {
		events.on('routeChangeComplete', () => menuToggle(false));
	}, [])

	return (
		<nav className={classNames('header__burger-menu burger-menu', openedMenu && 'burger-menu--open')}>
			<ul className="burger-menu__list">
				{links.map((link, i) => {
					const isCurrentPage = pathname === link.href

					return (
						<li key={i} className="burger-menu__item">
							<Link href={link.href} className={classNames("burger-menu__link", isCurrentPage && "burger-menu__link--active")}>{link.content}</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Hamburger