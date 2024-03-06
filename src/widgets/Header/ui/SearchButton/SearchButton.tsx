import { useActions } from "@/hooks/useActions"
import { Search } from "lucide-react"

const SearchButton = () => {
    const { searchModalToggle } = useActions()

    const handleModalOpen = () => {
        //получаем ширину скролл бара  и при открытии модалки даем отступ хедеру что бы не было прыжка при открытии
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.paddingRight = `${scrollbarWidth}px`

        //тоглим стейт в 'true' когда модалка открыта
        searchModalToggle(true)
    }

    return (
        <button onClick={handleModalOpen} className="header__search">
            <Search color="#fbfffe" />
        </button>
    )
}

export default SearchButton
