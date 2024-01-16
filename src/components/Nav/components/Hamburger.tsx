import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Hamburger = () => {
	const { openedMenu } = useAppSelector(state => state.toggleReducer)
	const { menuToggle } = useActions()
	const { pathname, events } = useRouter()
	const links = [
		{ href: '/', content: 'Home', timeout: 100, },
		{ href: '/movies', content: 'Movies', timeout: 150, },
		{ href: '/serials', content: 'Serials', timeout: 200, },
		{ href: '/cartoons', content: 'Cartoons', timeout: 250, },
	]

	useEffect(() => {
		events.on('routeChangeComplete', () => menuToggle(false));
	}, [])

	useEffect(() => {
		if (openedMenu) document.body.classList.add('lock')
		else document.body.classList.remove('lock')
	}, [openedMenu])

	return (
		<nav className={classNames('burger-menu', openedMenu && 'burger-menu--open')}>
			<div className='snow-container'>
				{Array.from({ length: 150 }).map((_, idx) => {
					return <div className='snow' key={idx} />;
				})}
			</div>
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
								<Link href={link.href} className={classNames('burger-menu__link', isCurrentPage && 'burger-menu__link--active')}>{link.content}</Link>
							</li>
						</CSSTransition>
					)
				})}
			</ul>
		</nav>
	)
}

export default Hamburger