import Nav from '@components/Nav/Nav'
// import Provider from '@components/Provider'
import { ReactNode } from 'react';
import '@styles/style.scss'

export const metadata = {
	title: 'Film Sphere',
	description: 'Discover & Share AI Prompts'
}

type Props = {
	children: ReactNode
}

const RootLayout = ({children}: Props) => {
	return (
		<html lang="en">
			<body>
				<div className="wrapper">
					{/* <Provider> */}
						<Nav/>
						<main className="page">
							{children}
						</main>
					{/* </Provider> */}
				</div>
			</body>
		</html>
	)
}

export default RootLayout	