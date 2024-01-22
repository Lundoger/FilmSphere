import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
	children: React.ReactNode,
	wrapperId: string,
}

const createWrapperAndAppendToBody = (wrapperId:string) => {
	if(!document) return null;
	const wrapperElement = document.createElement('div')
	wrapperElement.setAttribute('id', wrapperId)
	document.body.appendChild(wrapperElement)
	return wrapperElement
}

const ReactPortal = ({children, wrapperId}: ReactPortalProps) => {
	const [wrapper, setWrapper] = useState<HTMLElement | null>(null)
	
	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId)
		let systemCreated = false

		if(!element) {
			systemCreated = true
			element = createWrapperAndAppendToBody(wrapperId)
		}
		setWrapper(element)

		return (): void => {
			if(systemCreated && element?.parentNode) {
				element.parentNode.removeChild(element)
			}
		}
	}, [wrapperId])

	if(!wrapper) return null

	return createPortal(children, wrapper)
}

export default ReactPortal