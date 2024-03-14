import { useQuery } from "@tanstack/react-query";
import { IManga } from "../types/app-types";
import { ITrendingManga } from "../types/subtypes";
import useMangaStore from '../stores/store'
import { fetchTrendingMangas } from "../services/api.service";

function Trending() {

    const { isPending, error, data: TopComicsResponse } = useQuery({
        queryKey: ['fetchTrendingMangas'],
        queryFn: fetchTrendingMangas
    })

    if (isPending) {
        return <div>Getting Trending Mangas...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (TopComicsResponse) {
        const trendingMangas: IManga[] = TopComicsResponse.trending[30].map((manga: ITrendingManga) => {
            return {
                slug: manga.slug,
                title: manga.title!,
                description: "Placeholder Description",
                genres: [],
                chapters: 100,
                coverImage: useMangaStore.getState().imageUrlPrefix + manga.md_covers[0].b2key,
                authors: [],
                artists: []
            }

        })
        useMangaStore.setState({ trendingMangas: trendingMangas })
    }

    return (
        <div id="carousel-container" className="">
            <strong className="text-left">Trending:</strong>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                {useMangaStore.getState().trendingMangas.map((manga: IManga) => {
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
