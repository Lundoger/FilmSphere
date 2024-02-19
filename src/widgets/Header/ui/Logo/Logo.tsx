import { paths } from '@/helpers/routing'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href={paths.home} className="header__logo">
			Film<span>Sphere</span>
		</Link>
	)
}

export default Logo