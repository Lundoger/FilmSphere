import { useActions } from "@/hooks/useActions"
import { Search } from "lucide-react"

const SearchButton = () => {
    const { searchModalToggle } = useActions()

    return (
        <button onClick={() => searchModalToggle(true)} className="header__search">
            <Search color="#fbfffe" />
        </button>
    )
}

export default SearchButton
