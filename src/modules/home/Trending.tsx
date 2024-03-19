import { useQuery } from "@tanstack/react-query";
import { ITrendingMangaApp } from "../common/types/app-types";
import { ITrendingManga } from "../common/types/subtypes";
import useMangaStore from '../common/stores/store'
import { fetchTrendingMangas } from "../common/services/api-service";

function Trending() {

    const { isPending, error, data: topComicsResponse } = useQuery({
        queryKey: ['fetchTrendingMangas'],
        queryFn: fetchTrendingMangas
    })

    if (isPending) {
        return <div>Getting Trending Mangas...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (topComicsResponse) {
        const trendingMangas: ITrendingMangaApp[] = topComicsResponse.trending[30].map((manga: ITrendingManga) => {
            return {
                slug: manga.slug,
                title: manga.title!,
                coverImage: useMangaStore.getState().imageUrlPrefix + manga.md_covers[0].b2key,
            }

        })
        useMangaStore.setState({ trendingMangas: trendingMangas })
    }

    return (
        <div id="carousel-container" className="">
            <strong className="text-left">Trending:</strong>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                {useMangaStore.getState().trendingMangas.map((manga: ITrendingMangaApp) => {
                    return (
                        <div key={manga.slug} className="carousel-item h-80 w-full">
                            <img src={manga.coverImage} className="rounded-box" />
                            {manga.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Trending
