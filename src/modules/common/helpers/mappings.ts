import { IHomeCarouselData } from "../../home/types/home-types";
import { fetchGenreFilterResults, fetchStatusFilterResults } from "../services/api-service";
import useMangaStore from "../stores/store";
import { ITrendingMangaApp } from "../types/app-types";

export const getViewAllCategoryHeading = (category: string) => {
    switch (category) {
        case "trending":
            return "Trending Mangas"
        case "new":
            return "Latest Mangas"
            
        case "rank":
            return "Top Ranked Mangas"
        case "popular":
            return "Most Popular Mangas"
            
        default:
            
    }
}

export const getCarouselDetails = (category: string): IHomeCarouselData => {
    switch (category) {
        case 'new':
            {
                return { heading: "Fresh off The Pen", queryKey: "fetchNewMangas" }
            }
            
        case 'rank':
            {
                return { heading: "Chart-Topping Manga Marvels", queryKey: "fetchTopRankedMangas" }
            }
            
        case 'popular':
            {
                return { heading: "Tales that Hooked the Hoard", queryKey: "fetchMostFollowedMangas" }
            }
            

        default:
            return { heading: "", queryKey: "" }
            
    }
}

export const getHomeCarouselState = (category: string) => {
    switch (category) {
        case 'new':
            return useMangaStore.getState().newMangas
        
        case 'rank':
            return useMangaStore.getState().topRankedMangas
            
        case 'popular':
            return useMangaStore.getState().popularMangas
            
        default:
            return []
            
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
            
    }
}

export const getFilterRequestAndPayload = (filterType: string): { apiRequest: (arg0: number | string[] | null) => void, payload: null | number | string[] } | undefined => {
    switch (filterType) {
        case "genre":
            return { apiRequest: (genres: number | string[] | null) => fetchGenreFilterResults(genres as string[]), payload: useMangaStore.getState().selectedGenres }
            
        case "status":
            return { apiRequest: (status: number | string[] | null) => fetchStatusFilterResults(status as number), payload: useMangaStore.getState().selectedStatus }
            
        case "":
            return { apiRequest: () => { }, payload: null }
            
        default:
            
    }
}