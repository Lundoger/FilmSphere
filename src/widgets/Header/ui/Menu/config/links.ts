import { paths } from "@/helpers/routing"

export const links = [
    {
        href: paths.home,
        content: "Главная",
    },
    {
        href: paths.movieCatalog({ type: "movie", sortField: "year" }),
        content: "Фильмы",
    },
    {
        href: paths.seriesCatalog({ type: "tv-series", sortField: "year" }),
        content: "Сериалы",
    },
    {
        href: paths.cartoonCatalog({ type: "cartoon", sortField: "year" }),
        content: "Мультфильмы",
    },
    {
        href: paths.animeCatalog({ type: "anime", sortField: "year" }),
        content: "Аниме",
    },
]
