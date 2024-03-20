import { useQuery } from "@tanstack/react-query";
import { ITrendingMangaApp } from "../common/types/app-types";
import { ITrendingManga } from "../common/types/subtypes";
import useMangaStore from '../common/stores/store'
import { fetchTrendingMangas } from "../common/services/api-service";
import { Link } from "react-router-dom";

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
        <div className="carousel carousel-end bg-black h-1/3 m-2">
            {useMangaStore.getState().trendingMangas.map((manga: ITrendingMangaApp) => {
                return (
                    <div className="card w-full bg-base-100 shadow-xl image-full carousel-item h-full image-full:before:rounded-none">
                        <figure className="w-full"><img src={manga.coverImage} alt={`Trending Manga: ${manga.title}`} className="w-full object-top" /></figure>
                        <div className="card-body w-full">
                            <h2 className="card-title w-full place-self-center inset-0">{manga.title}</h2>
                            <div className="card-actions justify-end">
                                <Link to={`view-manga/${manga.slug}`} className="btn btn-primary">Read</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Trending
