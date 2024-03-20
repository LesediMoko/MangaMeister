import { create } from "zustand";
import { MangaReaderState } from "../types/app-types";

export const useMangaStore = create<MangaReaderState>(() => ({
    mangas: [],
    selectedChapter: null,
    chapters: [],
    imageUrlPrefix: "https://meo3.comick.pictures/",
    trendingMangas: [],
    selectedManga: null,
}));

export default useMangaStore;