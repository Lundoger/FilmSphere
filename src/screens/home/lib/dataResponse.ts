import { useGetGenreTitleQuery } from '@/api/filmSphereApi';
import { MovieDtoV14 } from '@/models/Api';
import { useEffect } from 'react'

type ActionFunction = {
    (data: MovieDtoV14[]): void;
}

interface getCategoryDataProps {
	genre: string,
	action: ActionFunction
}

export function getCategoryData({genre, action}: getCategoryDataProps) {
	const {data, isError, isLoading} = useGetGenreTitleQuery({limit: 10, genre: genre})
	if(data?.docs) action(data.docs)

	return {
		isError, 
		isLoading
	}
}