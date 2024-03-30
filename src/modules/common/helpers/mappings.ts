import { IHomeCarouselData } from "../../home/types/home-types";
import { fetchGenreFilterResults, fetchStatusFilterResults } from "../services/api-service";
import useMangaStore from "../stores/store";
import { ITrendingMangaApp } from "../types/app-types";

export const getViewAllCategoryHeading = (category: string) => {
    switch (category) {
        case "trending":
            return "Trending Mangas"
            break;
        case "new":
            return "Latest Mangas"
            break;
        case "rank":
            return "Top Ranked Mangas"
        case "popular":
            return "Most Popular Mangas"
            break;
        default:
            break;
    }
}

export const getCarouselDetails = (category: string): IHomeCarouselData => {
    switch (category) {
        case 'new':
            {
                return { heading: "Fresh off The Pen", queryKey: "fetchNewMangas" }
            }
            break;
        case 'rank':
            {
                return { heading: "Chart-Topping Manga Marvels", queryKey: "fetchTopRankedMangas" }
            }
            break;
        case 'popular':
            {
                return { heading: "Tales that Hooked the Hoard", queryKey: "fetchMostFollowedMangas" }
            }
            break;

        default:
            return { heading: "", queryKey: "" }
            break;
    }
}

export const getHomeCarouselState = (category: string) => {
    switch (category) {
        case 'new':
            return useMangaStore.getState().newMangas
            break;
        case 'rank':
            return useMangaStore.getState().topRankedMangas
            break;
        case 'popular':
            return useMangaStore.getState().popularMangas
            break;
        default:
            return []
            break;
    }
}

export const setHomeCarouselState = (category: string, newState: ITrendingMangaApp[]) => {
    switch (category) {
        case 'new':
            useMangaStore.setState({ newMangas: newState })
            break;
        case 'rank':
            useMangaStore.setState({ topRankedMangas: newState })
            break;
        case 'popular':
            useMangaStore.setState({ popularMangas: newState })
            break;
        default:
            break;
    }
}

export const getFilterRequestAndPayload = (filterType: string): { apiRequest: (arg0: number | string[] | null) => void, payload: null | number | string[] } | undefined => {
    switch (filterType) {
        case "genre":
            return { apiRequest: (genres: number | string[] | null) => fetchGenreFilterResults(genres as string[]), payload: useMangaStore.getState().selectedGenres }
            break;
        case "status":
            return { apiRequest: (status: number | string[] | null) => fetchStatusFilterResults(status as number), payload: useMangaStore.getState().selectedStatus }
            break;
        case "":
            return { apiRequest: () => { }, payload: null }
            break;
        default:
            break;
    }
}