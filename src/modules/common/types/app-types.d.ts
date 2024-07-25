import { IGenreListAPIResponse } from "./api-types";
import { IAdjacentChapter, IArtist, IAuthor, IMDImages, IRecommendation } from "./subtypes";

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
    recommendations?: IRecommendation[]
}

export interface ITrendingMangaApp {
    slug: string;
    title: string;
    coverImage: string;
    firstSlug?: string;
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
    comicSlug?: string;
    pages?: IMDImages[];
    groupName: string;
}

export interface IPagesProps {
    pages: IMDImages[]
    chapterID: string;
    nextChapter: IAdjacentChapter | null;
    prevChapter: IAdjacentChapter | null;
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
    popularMangas: ITrendingMangaApp[];
    topRankedMangas: ITrendingMangaApp[];
    genreList: IGenreListAPIResponse[];
    selectedStatus: number,
    selectedFilterType: "" | "genre" | "status",
    selectedGenres: string[];
    scrollPosition: { chapterID: string, position: number };
    scrollPositionHorizontal: { chapterID: string, offsetLeft: number, offsetWidth: number};
    orientation: "vertical" | "horizontal";
}