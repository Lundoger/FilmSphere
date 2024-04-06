type CatalogParams = {
    genre?: string
    rating?: string
    year?: string
    sortField?: string
    type?: string
}

type Id = number | string | null | undefined

export const paths = {
    home: "/",
    band: "#",
    profile: "/profile",
    movieCatalog: (params: CatalogParams): string => {
        const searchParams = new URLSearchParams({ ...params })
        const url = `/movies?${searchParams}`

        return url
    },
    seriesCatalog: (params: CatalogParams): string => {
        const searchParams = new URLSearchParams({ ...params })
        const url = `/series?${searchParams}`

        return url
    },
    cartoonCatalog: (params: CatalogParams): string => {
        const searchParams = new URLSearchParams({ ...params })
        const url = `/cartoons?${searchParams}`

        return url
    },
    animeCatalog: (params: CatalogParams): string => {
        const searchParams = new URLSearchParams({ ...params })
        const url = `/anime?${searchParams}`

        return url
    },
    movie: (id: Id): string => `/film/${id}`,
    person: (id: Id): string => `/name/${id}`,
}
