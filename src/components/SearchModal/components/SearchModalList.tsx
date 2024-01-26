import Spinner from '@/shared/Spinner/Spinner';
import SearchModalItem from './SearchModalItem';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useGetSearchTitleQuery } from '@/api/filmSphereApi';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useActions } from '@/hooks/useActions';

const SearchModalList = () => {
	const { search, currentData } = useAppSelector(state => state.searchReducer)
	const { setData } = useActions()
	const debouncedSearch = useDebounce(search) 
	const {isFetching, isError, data: response} = useGetSearchTitleQuery(debouncedSearch, {
		skip: debouncedSearch.length < 1
	})

	useEffect(() => {
		if(response?.docs) {
			const filteredData = response.docs.filter(item => item.poster !== null)
			setData(filteredData)
		}
	}, [response])

	const isSearchEmpty = search.length === 0

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
			{!isSearchEmpty && !currentData.length && (
				<>
					<h1 className='title'>
						No results found
					</h1>
					<p className='description'>
						Maybe you're looking for something that's not yet in the catalog
					</p>
				</>
			)}
			{!isFetching && !isError && currentData && (
				<ul className="search-modal__list">
					{currentData.map(item => (
						<SearchModalItem item={item}/>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchModalList