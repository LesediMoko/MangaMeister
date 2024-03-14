import { useQuery } from "@tanstack/react-query";
import { ITopComicsAPIResponse } from "../types/api-types";
import { IManga } from "../types/app-types";
import { ITrendingManga } from "../types/subtypes";
import useMangaStore from '../stores/store'

function Trending() {
    const imageUrlPrefix = 'https://meo3.comick.pictures/'
    const fetchTrendingMangas = async (): Promise<ITopComicsAPIResponse> => {
        const response = await fetch('https://api.comick.io/top?comic_types=manga&accept_mature_content=false');
        if (!response.ok) {
            throw new Error('Network call failed');
        }
        return response.json();
    };

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
                coverImage: imageUrlPrefix + manga.md_covers[0].b2key,
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
