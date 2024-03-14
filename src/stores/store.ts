import { create } from "zustand";
import { MangaReaderState } from "../types/app-types";

export const useMangaStore = create<MangaReaderState>((set) => ({
    mangas: [],
    selectedChapter: null,
    chapters: [],
    trendingMangas: [],
    selectedManga: null,
    fetchManga: () => set({}),
    selectManga: (slug) => set((state) => ({
        selectedManga: state.mangas.find((manga) => manga.slug === slug) || null
    })),
    fetchTrendingMangas: (mangas) => set(({ trendingMangas: mangas })),
    selectChapter: (hid) => set((state) => ({
        selectedChapter: state.chapters.find((chapter) => chapter.hid === hid) || null
    })),
}));

export default useMangaStore;