import { IArtist, IAuthor, IMDImages } from "./subtypes";

export interface ISelectedManga {
    slug: string;
    hid: string;
    title: string;
    description: string;
    genres: string[];
    chapterTotal: number;
    chapterList: ISelectedChapter[];
    coverImage: string;
    authors: IAuthor[];
    artists: IArtist[]
}

export interface ITrendingMangaApp {
    slug: string;
    title: string;
    coverImage: string;
}

export interface ISelectedChapter {
    hid: string;
    title: string;
    chapterNumber: number;
    releaseDate: string;
    volNumber?: number?;
    upCount: number;
    coverImage?: string;
    comicHid?: string;
    pages?: IMDImages[];
}

export interface IPagesProps {
    pages: IMDImages[]
    chapterID: string;
}

export interface IMangaDetailsProps {
    selectedSlug: string;
}

export interface IChapterListProps {
    listOfChapters: IChapter[];
}

export interface IChapterNavBarProps {
    chapterName: string;
    chapterNumber: number;
    mangaName: string;
}

export interface IVotesProps {
    upVotes: number;
}

export interface MangaReaderState {
    mangas: IManga[];
    chapters: ISelectedChapter[]
    trendingMangas: ITrendingMangaApp[];
    imageUrlPrefix: string;
    selectedManga: ISelectedManga | null;
    selectedChapter: ISelectedChapter | null;
    newMangas: ITrendingMangaApp[];
    popularMangas: ITrendingMangaApp[]
    topRankedMangas: ITrendingMangaApp[]
    scrollPosition: { chapterID: string, position: number };
}