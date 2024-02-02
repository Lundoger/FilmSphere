import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
	children: React.ReactNode,
	wrapperId: string,
	elementId?: string,
}

const createWrapperAndAppendToElement = (wrapperId:string, elementId:string | null = null) => {
	if(!document) return null;
	const wrapperElement = document.createElement('div')
	wrapperElement.setAttribute('id', wrapperId)
	elementId ? document.getElementById(elementId)?.appendChild(wrapperElement) : 
	document.body.appendChild(wrapperElement)
	return wrapperElement
}

const ReactPortal = ({children, wrapperId, elementId}: ReactPortalProps) => {
	const [wrapper, setWrapper] = useState<HTMLElement | null>(null)
	
	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId)
		let systemCreated = false

		if(!element) {
			systemCreated = true
			elementId ? element = createWrapperAndAppendToElement(wrapperId, elementId) : element = createWrapperAndAppendToElement(wrapperId) 
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