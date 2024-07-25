import { create } from "zustand";
import { MangaReaderState } from "../types/app-types";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useMangaStore = create<MangaReaderState>()(persist((_set, _get) =>
({
    mangas: [],
    selectedChapter: null,
    chapters: [],
    imageUrlPrefix: "https://meo3.comick.pictures/",
    trendingMangas: [],
    selectedManga: null,
    newMangas: [],
    popularMangas: [],
    topRankedMangas: [],
    genreList: [],
    selectedGenres: [],
    selectedStatus: -1,
    selectedFilterType: "",
    scrollPosition: { chapterID: "", position: 0 },
    scrollPositionHorizontal: { chapterID: "", offsetLeft: 0, offsetWidth: window.innerWidth},
    orientation: "vertical"
}),
    { name: 'manga-reader-store', storage: createJSONStorage(() => localStorage), version: 4.1 }));

export default useMangaStore;