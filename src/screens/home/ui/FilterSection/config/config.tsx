import { paths } from "@/helpers/routing"
import { Flame, Heart, Laugh, Sparkles, Trophy, Map, Axe, Fish, Shell, Music2 } from "lucide-react"

export const items = [
    {
        content: "Лучшее",
        icon: <Trophy color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ sortField: "votes.imdb", type: "movie" }),
    },
    {
        content: "Новинки",
        icon: <Flame color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ year: "2023-2024", type: "movie" }),
    },
    {
        content: "Романтика",
        icon: <Heart color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ genre: "мелодрама", sortField: "year", type: "movie" }),
    },
    {
        content: "Фэнтези",
        icon: <Sparkles color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ genre: "фэнтези", sortField: "year", type: "movie" }),
    },
    {
        content: "Комедия",
        icon: <Laugh color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ genre: "комедия", sortField: "year", type: "movie" }),
    },
    {
        content: "Приключения",
        icon: <Map color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ genre: "приключения", sortField: "year", type: "movie" }),
    },
    {
        content: "Ужасы",
        icon: <Axe color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ genre: "ужасы", sortField: "year", type: "movie" }),
    },
    {
        content: "Музыка",
        icon: <Music2 color="#fbfffe" strokeWidth={1} />,
        href: paths.movieCatalog({ genre: "музыка", sortField: "year", type: "movie" }),
    },
    {
        content: "Мультфильмы",
        icon: <Fish color="#fbfffe" strokeWidth={1} />,
        href: paths.cartoonCatalog({ type: "cartoon", sortField: "year" }),
    },
    {
        content: "Аниме",
        icon: <Shell color="#fbfffe" strokeWidth={1} />,
        href: paths.animeCatalog({ type: "anime", sortField: "year" }),
    },
]
