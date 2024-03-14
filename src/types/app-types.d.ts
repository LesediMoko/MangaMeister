import { IArtist, IAuthor } from "./subtypes";

export interface IManga {
    slug: string;
    title: string;
    description: string;
    genres: string[];
    chapters: number;
    coverImage: string;
    authors: IAuthor[];
    artists: IArtist[]
}

export interface IChapter {
    hid: string;
    title: string;
    chapterNumber: number;
    releaseDate: string;
    volNumber: number;
}

export interface MangaReaderState {
    mangas: IManga[];
    chapters: IChapter[];
    trendingMangas: Manga[];
    selectedManga: IManga | null;
    selectedChapter: IChapter | null;
    fetchTrendingMangas: (mangas: IManga[]) => void;
    fetchManga: () => void;
    selectManga: (hid: string) => void;
    selectChapter: (slug: string) => void;
}
