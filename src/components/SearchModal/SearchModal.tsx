import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import Modal from '@/shared/Modal/Modal'
import SearchModalList from './components/SearchModalList'
import SearchInput from './components/SearchInput'

const SearchModal = () => {
	const { isSearchModalOpen } = useAppSelector(state => state.toggleReducer)
	const { searchModalToggle, setSearch, setData } = useActions()

	const handleClose = () => {
		setSearch('')
		document.getElementById('header')!.style.paddingRight = `0`
		searchModalToggle(false)
	}

	return (
		<Modal isOpen={isSearchModalOpen} className='search-modal' handleClose={handleClose}>
			<h1 className="search-modal__title title">Search</h1>
			<SearchInput/>
			<SearchModalList/>
		</Modal>
	)
}

export default SearchModal