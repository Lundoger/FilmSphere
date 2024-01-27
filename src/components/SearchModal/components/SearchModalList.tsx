import Spinner from '@/shared/Spinner/Spinner';
import SearchModalItem from './SearchModalItem';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useGetSearchTitleQuery, useLazyGetSearchTitleQuery } from '@/api/filmSphereApi';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect } from 'react';
import { useActions } from '@/hooks/useActions';

const SearchModalList = () => {
	const { search, currentData, hasMore, currentPage } = useAppSelector(state => state.searchReducer)
	const { setData, setHasMore, loadMoreData, nextPage } = useActions()
	const debouncedSearch = useDebounce(search) 
	const { data: response, isFetching, isError } = useGetSearchTitleQuery({
		query: debouncedSearch,
		page: 1,
		limit: 20,
	  }, {
		skip: debouncedSearch.length < 1
	  });
	const [getSearchTitle, {data: lazyResponse}] = useLazyGetSearchTitleQuery()
 
	useEffect(() => {
		if(response) {
			setData(response.docs)
			response.pages > currentPage ? setHasMore(true) : setHasMore(false)
		}
	}, [response])

	useEffect(() => {
		getSearchTitle({
			query: debouncedSearch,
			page: currentPage,
			limit: 20,
		})
		if(lazyResponse) {
			loadMoreData(lazyResponse.docs)
			lazyResponse.pages > currentPage ? setHasMore(true) : setHasMore(false) 
		}
	}, [currentPage])

	const loadMore = () => {
		nextPage()
	}

	const isSearchEmpty = search.length !== 0

	return (
		<div className="search-modal__content">
			{isFetching && (
				<div className='loader--container'>
					<Spinner/>
				</div>
			)}
			{isError && (
				<h1 className='title title--error'>
					Something went wrong... <br/>
				</h1>
			)}
			{isSearchEmpty && !isFetching && !isError && currentData.length === 0 && (
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
			{hasMore && currentData.length > 0 && (
				<button
					onClick={loadMore} 
					className="search-modal__load-more"
				>
					Показать больше
				</button>
			)}
		</div>
	)
}

export default SearchModalList