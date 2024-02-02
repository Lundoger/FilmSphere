import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { CSSTransition } from 'react-transition-group'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SnowDecoration from '@/shared/SnowDecoration/SnowDecoration'

const Hamburger = () => {
	const { openedMenu } = useAppSelector(state => state.toggleReducer)
	const { menuToggle } = useActions()
	const { pathname, events } = useRouter()
	const links = [
		{ href: '/', content: 'Главная', timeout: 100, },
		{ href: '/movies', content: 'Фильмы', timeout: 150, },
		{ href: '/serials', content: 'Сериалы', timeout: 200, },
		{ href: '/cartoons', content: 'Мультфильмы', timeout: 250, },
		{ href: '/anime', content: 'Аниме', timeout: 300, },
	]

	useEffect(() => {
		events.on('routeChangeComplete', () => menuToggle(false));
	}, [])

	useEffect(() => {
		if (openedMenu) document.body.classList.add('lock')
		else document.body.classList.remove('lock')
	}, [openedMenu])

	return (
		<nav className='burger-menu'>
			<SnowDecoration/> 
			<ul className='burger-menu__list'>
				{links.map((link, i) => {
					const isCurrentPage = pathname === link.href

					return (
						<CSSTransition
							classNames={{enterDone: 'burger-menu__item--done'}}
							in={openedMenu}
							key={i}
							timeout={link.timeout}
						>
							<li className='burger-menu__item'>
								<Link href={link.href} className={clsx('burger-menu__link', isCurrentPage && 'burger-menu__link--active')}>{link.content}</Link>
							</li>
						</CSSTransition>
					)
				})}
			</ul>
		</nav>
	)
}

export default Hamburger