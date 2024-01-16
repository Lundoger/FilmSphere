import { useEffect } from 'react'
import ReactPortal from '@/components/ReactPortal/ReactPortal'

interface SearchModalProps {
	children: React.ReactNode,
	isOpen: boolean,
	handleClose: () => void,
}

const SearchModal = ({children, isOpen, handleClose}: SearchModalProps) => {
	useEffect(() => {
		const closeOnEscape = (e:KeyboardEvent) => e.key === 'Escape' ? handleClose() : null
		document.body.addEventListener('keydown', closeOnEscape)
		return () => {
			document.body.removeEventListener('keydown', closeOnEscape)
		}
	}, [handleClose])

	useEffect(() => {
		document.body.classList.add('lock')
		return () => {
			document.body.classList.remove('lock')
		}
	}, [isOpen])

	if(!isOpen) return null

	return (
		<ReactPortal wrapperId="react-portal-modal-container">
			<>
				<div className="modal-bg"></div>
				<div className="search-modal">
					<h2 className="search-modal__title">Search</h2>
					<form className='search-modal__form'>
						
					</form>
				</div>
			</>
		</ReactPortal>
	)
}

export default SearchModal