import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import Modal from "@/shared/Modal/Modal"
import SearchModalList from "./SearchModalList/SearchModalList"
import SearchInput from "./SearchInput/SearchInput"
import { useRouter } from "next/router"
import { useDebounce } from "@/hooks/useDebounce"
import { useCallback, useEffect } from "react"

const SearchModal = () => {
    const { isSearchModalOpen } = useAppSelector(state => state.toggleReducer)
    const { search } = useAppSelector(state => state.searchReducer)
    const { searchModalToggle, setSearch } = useActions()
    const router = useRouter()
    // const { debounced } = useDebounce(search)

    const handleClose = useCallback(() => {
        setSearch("")
        searchModalToggle(false)
    }, [])

    useEffect(() => {
        router.events.on("routeChangeStart", handleClose)

        return () => {
            router.events.off("routeChangeStart", handleClose)
        }
    }, [])

    return (
        <Modal isOpen={isSearchModalOpen} className="search-modal" handleClose={handleClose}>
            <div className="search-modal__container">
                <h1 className="search-modal__title">Поиск</h1>
                <SearchInput />
                {/* {search && <SearchModalList />} */}
            </div>
        </Modal>
    )
}

export default SearchModal
