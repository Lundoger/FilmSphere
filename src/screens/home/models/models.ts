import { useGetGenreTitleQuery } from '@/api/filmSphereApi'
import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useEffect } from 'react'
import { getCategoryData } from '../lib/dataResponse'

const homeModels = () => {
	const {setAdventureData, setComedyData, setRomanceData, setFantasyData, setCartoonData, setAnimeData} = useActions()
	const { adventureData, comedyData, romanceData, fantasyData, cartoonData, animeData } = useAppSelector(state => state.categoryReducer)

	const {isLoading: adventureLoading, isError: adventureError} = getCategoryData({
		genre:'приключения', 
		action: setAdventureData
	})
	const {isLoading: comedyLoading, isError: comedyError} = getCategoryData({
		genre:'комедия', 
		action: setComedyData
	})
	const {isLoading: romanceLoading, isError: romanceError} = getCategoryData({
		genre:'мелодрама', 
		action: setRomanceData
	})
	const {isLoading: fantasyLoading, isError: fantasyError} = getCategoryData({
		genre:'фэнтези', 
		action: setFantasyData
	})
	const {isLoading: cartoonLoading, isError: cartoonError} = getCategoryData({
		genre:'мультфильм', 
		action: setCartoonData
	})
	const {isLoading: animeLoading, isError: animeError} = getCategoryData({
		genre:'аниме', 
		action: setAnimeData
	})

	const isError = adventureError || comedyError || romanceError || fantasyError || cartoonError || animeError
	const isLoading = adventureLoading || comedyLoading || romanceLoading || fantasyLoading || cartoonLoading || animeLoading
	const isDataLoaded =  adventureData && comedyData && romanceData && fantasyData && cartoonData && animeData

	return {
		isError,
		isLoading,
		isDataLoaded
	}
}

export default homeModels