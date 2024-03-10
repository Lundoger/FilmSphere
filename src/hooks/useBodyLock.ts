import { useEffect } from "react"

export function useBodyLock(locked = false) {
    useEffect(() => {
        if (!locked) {
            return
        }

        const scrollBarWidth = window.innerWidth - document.body.offsetWidth

        document.body.style.paddingRight = `${scrollBarWidth}px`

        // Lock body scroll
        document.body.classList.add("lock")

        return () => {
            document.body.classList.remove("lock")

            document.body.style.paddingRight = "0px"
        }
    }, [locked])
}
