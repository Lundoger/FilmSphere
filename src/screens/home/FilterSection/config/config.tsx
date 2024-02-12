import { paths } from '@/shared/routing/routing';
import { Flame, Heart, Laugh, Sparkles, Trophy, Map, Axe, Fish, Shell, Music2 } from 'lucide-react';

export const items = [
	{
		content: 'Лучшее',
		icon: <Trophy color="#fbfffe" strokeWidth = {1} />,
		href: paths.movies
	},
	{
		content: 'Новинки',
		icon: <Flame color="#fbfffe" strokeWidth = {1} />,
		href: paths.catalog({ year: '2022-2023' })
	},
	{
		content: 'Романтика',
		icon: <Heart color="#fbfffe" strokeWidth = {1} />,
		href: paths.catalog({ genre: 'мелодрама' }),
	},
	{
		content: 'Фэнтези',
		icon: <Sparkles color="#fbfffe" strokeWidth = { 1} />,
		href: paths.catalog({ genre: 'фэнтези' }),
	},
	{
		content: 'Комедия',
		icon: <Laugh color="#fbfffe" strokeWidth = { 1} />,
		href: paths.catalog({ genre: 'комедия' }),
	},
	{
		content: 'Приключения',
		icon: <Map color="#fbfffe" strokeWidth = { 1} />,
		href: paths.catalog({ genre: 'приключения' }),
	},
	{
		content: 'Ужасы',
		icon: <Axe color="#fbfffe" strokeWidth = { 1} />,
		href: paths.catalog({ genre: 'ужасы' }),
	},
	{
		content: 'Музыка',
		icon: <Music2 color="#fbfffe" strokeWidth = { 1} />,
		href: paths.catalog({ genre: 'музыка' }),
	},
	{
		content: 'Мультфильмы',
		icon: <Fish color="#fbfffe" strokeWidth = { 1} />,
		href: paths.cartoons,
	},
	{
		content: 'Аниме',
		icon: <Shell color="#fbfffe" strokeWidth = { 1} />,
		href: paths.anime,
	},
]