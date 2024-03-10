import type { FormEvent } from "react"
import { useEffect, useRef } from "react"
import { Input } from "@/shared/Input/Input"
import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"

const SearchInput = () => {
    const { search } = useAppSelector(state => state.searchReducer)
    const { setSearch } = useActions()
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        inputRef.current?.blur()
    }

    const handleClear = () => {
        setSearch("")
        inputRef.current?.focus()
    }

    return (
        <form className="search-modal__form" onSubmit={handleSubmit}>
            <Input
                placeholder="Фильмы, сериалы, аниме..."
                onClear={handleClear}
                onChange={e => setSearch(e.currentTarget.value)}
                value={search}
                ref={inputRef}
            />
        </form>
    )
}

export default SearchInput
