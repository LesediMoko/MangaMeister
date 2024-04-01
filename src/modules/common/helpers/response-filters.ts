import useMangaStore from '../stores/store';
import { IChaptersAPIResponse, IComicAPIResponse, IGenreListAPIResponse, ITopComicsAPIResponse } from '../types/api-types';
import { ISelectedChapter, ISelectedManga, ITrendingMangaApp } from '../types/app-types';
import { IChapter, INews, IRank } from '../types/subtypes';


export const comicResponseFilter = (apiResponse: IComicAPIResponse, apiComicSlug: string, chapterList: ISelectedChapter[]) => {

    const mdGenres = apiResponse.comic.md_comic_md_genres.map((comicGenre) => (comicGenre.md_genres));
    const filteredGenres = mdGenres.filter((genreObj) => (genreObj.type === 'Genre'));
    const genreNames = filteredGenres.map((genreObj) => (genreObj.name));
    const newSelectedMangaState: ISelectedManga = {
        coverImage: useMangaStore.getState().imageUrlPrefix + apiResponse.comic.md_covers[0].b2key,
        slug: apiComicSlug,
        title: apiResponse.comic.title,
        description: apiResponse.comic.desc,
        genres: genreNames,
        chapterTotal: Math.floor(apiResponse.comic.last_chapter),
        authors: apiResponse.authors,
        artists: apiResponse.artists,
        hid: apiResponse.comic.hid,
        chapterList: chapterList
    }
    return newSelectedMangaState;
}

export const chapterListResponseFilter = (apiResponse: IChaptersAPIResponse) => {

    const chapterList = apiResponse.chapters.map((currentChapter: IChapter) => {
        const chapterListItem: ISelectedChapter = {
            hid: currentChapter.hid,
            chapterNumber: Number(currentChapter.chap),
            releaseDate: currentChapter.created_at.slice(0, 11),
            title: currentChapter.title,
            upCount: currentChapter.up_count,
            groupName: currentChapter.group_name && currentChapter.group_name[0] ? currentChapter.group_name[0] : "",

        }
        return chapterListItem
    })
    return chapterList
}

export const carouselFilter = (apiResponse: ITopComicsAPIResponse, category: string) => {
    switch (category) {
        case "new":
            {
                if (!(apiResponse && apiResponse.news && apiResponse.news?.length > 0))
                    return []
                const filterednewMangaListState = apiResponse.news.filter((manga: INews) => { return manga.content_rating === "safe" })
                const newMangaListState: ITrendingMangaApp[] = filterednewMangaListState.map((manga: INews) => {
                    return {
                        slug: manga.slug,
                        title: manga.title,
                        coverImage: useMangaStore.getState().imageUrlPrefix + manga.md_covers[0].b2key,
                    }

                })
                return newMangaListState
            }

            break;
        case "popular":
            {
                if (!(apiResponse && apiResponse.topFollowComics && apiResponse.topFollowComics["7"] && apiResponse?.topFollowComics["7"]?.length > 0))
                    return []
                const filterednewMangaListState = apiResponse.topFollowComics[7].filter((manga: INews) => { return manga.content_rating === "safe" })
                const newMangaListState: ITrendingMangaApp[] = filterednewMangaListState.map((manga: INews) => {
                    return {
                        slug: manga.slug,
                        title: manga.title,
                        coverImage: useMangaStore.getState().imageUrlPrefix + manga.md_covers[0].b2key,
                    }

                })
                return newMangaListState
            }

            break;
        case "rank":
            {
                if (!(apiResponse && apiResponse.rank && apiResponse.rank?.length > 0))
                    return []
                const filterednewMangaListState = apiResponse.rank.filter((manga: IRank) => { return manga.content_rating === "safe" })
                const newMangaListState: ITrendingMangaApp[] = filterednewMangaListState.map((manga: IRank) => {
                    return {
                        slug: manga.slug,
                        title: manga.title ?? "",
                        coverImage: useMangaStore.getState().imageUrlPrefix + manga.md_covers[0].b2key,
                    }

                })
                return newMangaListState
            }

            break;

        default:
            return []
            break;
    }

}

export const splitArrayIntoGroups = (array: IGenreListAPIResponse[], chunkSize = 10) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}

export const getScanGroups = (): string[] => {
    const allScans: string[] = [];
    const selectedManga = useMangaStore.getState().selectedManga;
    if (!selectedManga || !selectedManga.chapterList) {
        return [];
    }
    for (const chapter of selectedManga.chapterList) {
        if (chapter.groupName) {
            allScans.push(chapter.groupName);
        }
    }
    return Array.from(new Set(allScans));
}

