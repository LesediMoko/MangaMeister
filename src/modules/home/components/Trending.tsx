import { useQuery } from "@tanstack/react-query";
import { ITrendingMangaApp } from "../../common/types/app-types";
import { ITrendingManga } from "../../common/types/subtypes";
import useMangaStore from '../../common/stores/store'
import { fetchTrendingMangas } from "../../common/services/api-service";
import TrendingList from "./TrendingList";
import TrendingSkeleton from "./TrendingSkeleton";

function Trending() {

    const { isPending, error, data: topComicsResponse } = useQuery({
        queryKey: ['fetchTrendingMangas'],
        queryFn: fetchTrendingMangas
    })

    if (isPending) {
        return <TrendingSkeleton />
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
        <div className="carousel carousel-end bg-black h-80 w-full mb-10">
            {useMangaStore.getState().trendingMangas.map((manga: ITrendingMangaApp) => {
                return (
                    <TrendingList slug={manga.slug} title={manga.title} coverImage={manga.coverImage} key={manga.slug} />
                )
            }
            )}

        </div>
    )

}
export default Trending
