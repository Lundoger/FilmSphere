import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface ReactPortalProps {
    children: React.ReactNode
    wrapperId: string
}

const ReactPortal = ({ children, wrapperId }: ReactPortalProps) => {
    const [mounted, setMounted] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        setMounted(true)
        containerRef.current = document.querySelector(`${wrapperId}`)
        return () => setMounted(false)
    }, [wrapperId])

    return mounted && Boolean(containerRef.current)
        ? createPortal(children, containerRef.current as HTMLDivElement)
        : null
}

export default ReactPortal
