import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import Modal from '@/shared/Modal/Modal'
import SearchModalList from './SearchModalList/SearchModalList'
import SearchInput from './SearchInput/SearchInput'
import SnowDecoration from '@/shared/SnowDecoration/SnowDecoration'

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
			<SnowDecoration/>
			<h1 className="search-modal__title title">Search</h1>
			<SearchInput/>
			<SearchModalList/>
		</Modal>
	)
}

export default SearchModal