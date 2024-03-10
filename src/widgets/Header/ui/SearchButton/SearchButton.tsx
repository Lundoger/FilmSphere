import { useActions } from "@/hooks/useActions"
import { Search } from "lucide-react"

const SearchButton = () => {
    const { searchModalToggle } = useActions()

    const handleModalOpen = () => {
        searchModalToggle(true)
    }

    return (
        <button onClick={handleModalOpen} className="header__search">
            <Search color="#fbfffe" />
        </button>
    )
}

export default SearchButton
