import Spinner from '@/shared/Spinner/Spinner';
import { useGetSearchTitleQuery } from '@/api/filmSphereApi';
import SearchModalItem from './SearchModalItem';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';

interface SearchModalListProps {
	value: string,
}

export const SearchModalList = ({value}: SearchModalListProps) => {
	const { search } = useAppSelector(state => state.searchReducer)
	const {isFetching, isError, data: response} = useGetSearchTitleQuery(value,{
		skip: value.trim().length === 0,
	})
	
	const [filteredData, setFilteredData] = useState(response?.docs);

	useEffect(() => {
	  if (response) {
		const newFilteredData = response.docs.filter(item => item.poster !== null);
		setFilteredData(newFilteredData);
	  }
	}, [response]);

	return (
		<div className="search-modal__content">
			{isFetching && (
				<div className='loader--container'>
					<Spinner/>
				</div>
			)}
			{isError && (
				<h1 className='title title--error'>
					Something went wrong...
				</h1>
			)}
			{!isFetching && !isError && filteredData && filteredData.length === 0 && (
				<>
					<h1 className='title'>
						No results found
					</h1>
					<p className='description'>
						Maybe you're looking for something that's not yet in the catalog
					</p>
				</>
			)}
			{!isFetching && !isError && filteredData && (
				<ul className="search-modal__list">
					{filteredData.map((item) => (
						<SearchModalItem item={item}/>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchModalList