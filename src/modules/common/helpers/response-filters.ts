import useMangaStore from '../stores/store';
import { IChaptersAPIResponse, IComicAPIResponse, ITopComicsAPIResponse } from '../types/api-types';
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
                const newMangaListState: ITrendingMangaApp[] = apiResponse.news.map((manga: INews) => {
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
                const newMangaListState: ITrendingMangaApp[] = apiResponse.topFollowComics[7].map((manga: INews) => {
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
                const newMangaListState: ITrendingMangaApp[] = apiResponse.rank.map((manga: IRank) => {
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