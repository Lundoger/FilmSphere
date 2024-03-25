import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import clsx from "clsx"

const BurgerButton = () => {
    const { menuToggle } = useActions()
    const openedMenu = useAppSelector(state => state.toggleReducer.openedMenu)

    return (
        <button
            onClick={() => menuToggle(!openedMenu)}
            type="button"
            className={clsx(
                "header__icon icon-burger-header",
                openedMenu && "icon-burger-header--opened"
            )}
        >
            <span></span>
        </button>
    )
}

export default BurgerButton
