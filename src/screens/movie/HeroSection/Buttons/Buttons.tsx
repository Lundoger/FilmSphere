import { Button } from '@/shared/Button/Button'
import { Bookmark, MonitorPlay, PlayCircle, Star } from 'lucide-react'
import React from 'react'

const Buttons = () => {
	return (
		<div className="movie-hero__actions">
			<Button
				className='movie-hero__actions-button'
				gradient
				rounded
				size='big'
				endIcon={<MonitorPlay />}
			>
				Смотреть
			</Button>
			<Button
				className='movie-hero__actions-button movie-hero__actions-button--trailer'
				rounded
				variant='glass'
				endIcon={<PlayCircle />}
			>
				Трейлер
			</Button>
			<Button
				className='movie-hero__actions-button'
				rounded
				endIcon={<Bookmark />}
				variant='glass'
			>
			</Button>
			<Button
				className='movie-hero__actions-button'
				rounded
				endIcon={<Star />}
				variant='glass'
			>
			</Button>
		</div>
	)
}

export default Buttons