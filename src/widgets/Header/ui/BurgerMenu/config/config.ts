import { paths } from "@/helpers/routing"

export const links = [
    { href: paths.home, content: "Главная", timeout: 100 },
    {
        href: paths.movieCatalog({ type: "movie", sortField: "year" }),
        content: "Фильмы",
        timeout: 150,
    },
    {
        href: paths.seriesCatalog({ type: "tv-series", sortField: "year" }),
        content: "Сериалы",
        timeout: 200,
    },
    {
        href: paths.cartoonCatalog({ type: "cartoon", sortField: "year" }),
        content: "Мультфильмы",
        timeout: 250,
    },
    {
        href: paths.animeCatalog({ type: "anime", sortField: "year" }),
        content: "Аниме",
        timeout: 300,
    },
]
