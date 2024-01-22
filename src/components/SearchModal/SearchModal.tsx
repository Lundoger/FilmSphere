import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import Modal from '@/shared/Modal/Modal'
import SearchModalInput from './components/SearchModalInput'

const SearchModal = () => {
	const { isSearchModalOpen } = useAppSelector(state => state.toggleReducer)
	const { searchModalToggle } = useActions()

	return (
		<Modal isOpen={isSearchModalOpen} className='search-modal' handleClose={() => searchModalToggle(false)}>
			<h1 className="search-modal__title">Search</h1>
			<SearchModalInput/>
		</Modal>
	)
}

export default SearchModal