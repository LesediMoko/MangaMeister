import { IAdjacentChapter, IChapterFullInfo, IChapterLangList, IDupGroupChapter, IFollows, IChapter, INews, IRank, IRecentRank, ITopFollowComic, ITopFollowComic, ITrending, IComic } from "./subtypes";

export interface ICategoryAPIResponse {
    id: number;
    title: string;
    slug: string;
}

export interface ITopComicsAPIResponse {
    rank: IRank[];
    recentRank: IRecentRank[];
    trending: ITrending;
    follows: IFollows[];
    news: INews[];
    extendedNews: INews[];
    completions: INews[];
    topFollowNewComics: ITopFollowComic;
    topFollowComics: ITopFollowComic;
    comicsByCurrentSeason: IComicsByCurrentSeason;
}




export interface IGenreListAPIResponse {
    id: number;
    name: string;
    slug: string;
    comic_count: number;
    group: string;
}



export interface IComicAPIResponse {
    firstchap: IFirstChapter;
    comic: IComic;
    artists: IArtist[];
    authors: IAuthors[];
    langList: string[];
    recommendable: boolean;
    demographic: string;
    englishLink: string | null;
    matureContent: boolean;
    checkVol2Chap1: boolean;
}

export interface IChaptersAPIResponse {
    chapters: IChapter[];
    total: number;
    limit: number;
}

export interface IChapterInfoAPIResponse {
    chapter: IChapterFullInfo;
    next: IAdjacentChapter;
    prev: IAdjacentChapter;
    matureContent: boolean;
    chapters: IAdjacentChapter[];
    dupGroupChapters: IDupGroupChapter[];
    chapterLangList: IChapterLangList[];
    canonical: string;
    seoTitle: string;
    seoDescription: string;
    chapTitle: string;
    checkVol2Chap1: boolean;
}