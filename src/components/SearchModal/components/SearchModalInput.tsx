import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { Input } from '@/shared/Input/Input'
import { FormEvent, useEffect, useRef } from 'react'

const SearchModalInput = () => {
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
		setSearch('')
		inputRef.current?.focus()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				placeholder='Movies, Serials, Anime...'
				onClear={handleClear}
				onChange={e => setSearch(e.target.value)}
				value={search}
				ref={inputRef}
			/>
		</form>
	)
}

export default SearchModalInput