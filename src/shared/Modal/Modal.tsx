import { useCallback, useEffect } from "react"
import ReactPortal from "@/shared/ReactPortal/ReactPortal"
import { X } from "lucide-react"
import clsx from "clsx"
import { useBodyLock } from "@/hooks/useBodyLock"

interface ModalProps {
    children: React.ReactNode
    className?: string
    isOpen: boolean
    handleClose: () => void
}

const Modal = ({ children, className, isOpen, handleClose }: ModalProps) => {
    const closeOnEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose()
            }
        },
        [handleClose]
    )

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscape)
        return () => {
            document.body.removeEventListener("keydown", closeOnEscape)
        }
    }, [closeOnEscape])

    useBodyLock(isOpen)

    if (!isOpen) return null

    return (
        <ReactPortal wrapperId="#modal">
            <div className={clsx("modal", className)}>
                <button onClick={handleClose} className="modal__button">
                    <X color="#fbfffe" />
                </button>
                {children}
            </div>
        </ReactPortal>
    )
}

export default Modal
