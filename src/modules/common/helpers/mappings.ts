import { IHomeCarouselData } from "../../home/types/home-types";
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