import { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactPortal from '@/shared/ReactPortal/ReactPortal'
import { X } from 'lucide-react'
import clsx from 'clsx'

interface ModalProps {
	children: React.ReactNode,
	className?: string,
	isOpen: boolean,
	handleClose: () => void,
}

const Modal = ({ children, className, isOpen, handleClose }: ModalProps) => {
	useEffect(() => {
		const closeOnEscape = (e: KeyboardEvent) => e.key === 'Escape' ? handleClose() : null
		document.body.addEventListener('keydown', closeOnEscape)
		return () => {
			document.body.removeEventListener('keydown', closeOnEscape)
		}
	}, [handleClose])

	useEffect(() => {
		if (isOpen) document.body.classList.add('lock')
		else document.body.classList.remove('lock')
	}, [isOpen])

	if (!isOpen) return null

	return (
		<ReactPortal wrapperId="portal-modal-container">
			<CSSTransition
				classNames={{
					enterDone: 'modal--done',
				}}
				in={isOpen}
				timeout={300}
			>
				<div className={clsx('modal', isOpen && 'modal--done', className)}>
					<button onClick={handleClose} className='modal__button'>
						<X color="#fbfffe" />
					</button>
					<div className="modal__container">
						{children}
					</div>
				</div>
			</CSSTransition>
		</ReactPortal>
	)
}

export default Modal