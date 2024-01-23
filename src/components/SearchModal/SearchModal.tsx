import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import Modal from '@/shared/Modal/Modal'
import SearchModalList from './components/SearchModalList'
import { useDebounce } from '@/hooks/useDebounce'
import { FormEvent, useEffect, useRef } from 'react'
import { Input } from '@/shared/Input/Input'

const SearchModal = () => {
	const { isSearchModalOpen } = useAppSelector(state => state.toggleReducer)
	const { search } = useAppSelector(state => state.searchReducer)
	const { searchModalToggle, setSearch } = useActions()
	const inputRef = useRef<HTMLInputElement>(null)
	const debounced = useDebounce(search.trim())

	useEffect(() => {
		inputRef.current?.focus()
	}, [isSearchModalOpen])

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		inputRef.current?.blur()
	}

	const handleClear = () => {
		setSearch('')
		inputRef.current?.focus()
	}

	return (
		<Modal isOpen={isSearchModalOpen} className='search-modal' handleClose={() => searchModalToggle(false)}>
			<h1 className="search-modal__title title">Search</h1>
			<form onSubmit={handleSubmit}>
				<Input
					placeholder='Movies, Serials, Anime...'
					onClear={handleClear}
					onChange={e => setSearch(e.target.value)}
					value={search}
					ref={inputRef}
				/>
			</form>
			<SearchModalList value={debounced}/>
		</Modal>
	)
}

export default SearchModal