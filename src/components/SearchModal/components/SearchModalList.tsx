import Spinner from '@/shared/Spinner/Spinner';
import SearchModalItem from './SearchModalItem';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useGetSearchTitleQuery, useLazyGetSearchTitleQuery } from '@/api/filmSphereApi';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useActions } from '@/hooks/useActions';

const SearchModalList = () => {
	//экшены и поля из стора
	const { search, currentData, hasMore, currentPage } = useAppSelector(state => state.searchReducer)
	const { setData, setHasMore, loadMoreData, nextPage, setPage } = useActions()
	const { debounced } = useDebounce(search)

	//состояние для отображения сообщения "Ничего не найдено"
	const [searchPending, setSearchPending] = useState(false)

	//хуки их rtk query для запросов
	const { data: response, isFetching, isError } = useGetSearchTitleQuery({
		query: debounced,
		page: 1,
		limit: 30,
	}, {
		skip: debounced.length < 2
	});
	const [getSearchTitle, { data: lazyResponse, isFetching: isLazyFetching, isError: isLazyError }] = useLazyGetSearchTitleQuery()

	useEffect(() => {
		if (debounced.length < 2) {
			setSearchPending(false)
			setData([])
		}
	}, [debounced])

	//useEffect для фильтрации данных по запросу из инпута
	useEffect(() => {
		setPage(1)
		if (response) {
			setSearchPending(true)
			const filteredData = response.docs.filter(item => item.poster !== null && item.poster?.url !== null)
			setData(filteredData)
			response.pages > currentPage ? setHasMore(true) : setHasMore(false)
		}
	}, [response])

	//useEffect для запроса с новой страницей, после нажатия на кнопку load more
	useEffect(() => {
		if (currentPage > 1) {
			getSearchTitle({
				query: debounced,
				page: currentPage,
				limit: 30,
			})
		}
	}, [currentPage])

	//useEffect для записи в стор полученных дозагруженных(по нажатию на load more) данных
	useEffect(() => {
		if (lazyResponse) {
			const filteredData = lazyResponse.docs.filter(item => item.poster !== null && item.poster?.url !== null)
			loadMoreData(filteredData)
			lazyResponse.pages > currentPage ? setHasMore(true) : setHasMore(false)
		}
	}, [lazyResponse])

	const loadMore = () => {
		nextPage()
	}

	return (
		<div className="search-modal__content">
			{isFetching && (
				<div className='loader--container'>
					<Spinner />
				</div>
			)}
			{isError && (
				<h1 className='title title--error'>
					Something went wrong... <br />
				</h1>
			)}
			{searchPending && !isFetching && !isError && currentData.length === 0 && (
				<>
					<h1 className='title'>
						Ничего не найдено
					</h1>
					<p className='description'>
						Может быть, вы ищете то, чего пока нет в каталоге
					</p>
				</>
			)}
			<>
				{!isFetching && !isError && currentData && (
					<ul className="search-modal__list">
						{currentData.map(item => (
							<SearchModalItem item={item} />
						))}
					</ul>
				)}
				{isLazyFetching && (
					<div className='loader--container'>
						<Spinner />
					</div>
				)}
				{hasMore && currentData.length > 0 && (
					<button
						onClick={loadMore}
						className="search-modal__load-more"
					>
						Показать больше
					</button>
				)}
			</>
		</div>
	)
}

export default SearchModalList