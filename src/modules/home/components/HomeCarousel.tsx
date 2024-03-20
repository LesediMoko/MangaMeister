import { useQuery } from "@tanstack/react-query"
import { fetchTrendingMangas } from "../../common/services/api-service"
import { getCarouselDetails, getHomeCarouselState, setHomeCarouselState } from "../../common/helpers/mappings"
import HomeCarouselList from "./HomeCarouselList"
import { carouselFilter } from "../../common/helpers/response-filters"
import CarouselSkeleton from "./CarouselSkeleton"

const HomeCarousel = ({ category }: { category: string }) => {
    const { heading, queryKey } = getCarouselDetails(category)
    const { isPending, error, data: topComicsResponse } = useQuery({
        queryKey: [queryKey],
        queryFn: fetchTrendingMangas
    })

    if (isPending) {
        return <CarouselSkeleton category={category} />
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (topComicsResponse) {
        const newMangaListState = carouselFilter(topComicsResponse, category)
        setHomeCarouselState(category, newMangaListState)
    }
    return (
        <div className="flex flex-col h-80 ml-2 mr-2 mb-10">
            <div className="flex flex-row justify-between mb-2 ml-2 mr-2 text-slate-50">
                <p>{heading}</p>
                <p>...</p>
            </div>
            <div className="carousel gap-2">
                {getHomeCarouselState(category).map((manga) => {
                    return (<HomeCarouselList coverImage={manga.coverImage} slug={manga.slug} title={manga.title} key={manga.slug} />)
                })}
            </div>
        </div>
    )

}

export default HomeCarousel