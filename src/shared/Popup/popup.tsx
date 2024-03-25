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

interface CloseProps {
    onClick: () => void
    className?: string
}

const Popup = ({ children, className, isOpen, handleClose }: ModalProps) => {
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
            <div onClick={handleClose} className={clsx("popup", className)}>
                <div onClick={e => e.stopPropagation()} className="popup--container">
                    {children}
                </div>
            </div>
        </ReactPortal>
    )
}

const ClosePopup = ({ onClick, className }: CloseProps) => (
    <button onClick={onClick} className={clsx("popup__button", className)}>
        <X color="#fbfffe" />
    </button>
)

Popup.Close = ClosePopup

export default Popup
