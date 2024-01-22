import { Search } from 'lucide-react'

interface SearchButtonProps {
	onClick: () => void,
}

const SearchButton = ({onClick}: SearchButtonProps) => {
	return (
		<button onClick={onClick} className="header__search">
			<Search color="#fbfffe" />
		</button>
	)
}

export default SearchButton