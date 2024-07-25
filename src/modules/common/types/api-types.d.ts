import { IAdjacentChapter, IChapterFullInfo, IChapterLangList, IDupGroupChapter, IFollows, IChapter, INews, IRank, IRecentRank, ITopFollowComic, ITopFollowComic, ITrending, IComic, IMDCover } from "./subtypes";

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

export interface ISearchAPIResponse {
    id: number;
    hid: string;
    slug: string;
    title: string;
    rating: number | null;
    bayesian_rating: number | null;
    rating_count: number;
    follow_count: number;
    desc: string?;
    status: number;
    last_chapter: number;
    translation_completed: boolean;
    view_count: number;
    content_rating: string;
    demographic: number | null;
    uploaded_at: string;
    genres: number[];
    created_at: string;
    user_follow_count: number;
    year: number;
    country: string;
    md_titles: { title: string };
    md_covers: IMDCover[];
    mu_comics: { year: number };

}