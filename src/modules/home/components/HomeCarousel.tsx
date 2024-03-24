import { useQuery } from "@tanstack/react-query"
import { fetchTrendingMangas } from "../../common/services/api-service"
import { getCarouselDetails, getHomeCarouselState, setHomeCarouselState } from "../../common/helpers/mappings"
import HomeCarouselList from "./HomeCarouselList"
import { carouselFilter } from "../../common/helpers/response-filters"
import CarouselSkeleton from "./CarouselSkeleton"
import { Link } from "react-router-dom"

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
        <div className="flex flex-col ml-2 mr-2">
            <div className="flex flex-row justify-between mb-2 ml-2 mr-2 text-slate-50">
                <p>{heading}</p>
                <Link to={`view-all/${category}`} state={{ previousPage: "Home" }} ><p>...</p></Link>
            </div>
            <div className="carousel gap-2 mb-5">
                {getHomeCarouselState(category).slice(0, 8).map((manga) => {
                    return (<HomeCarouselList coverImage={manga.coverImage} slug={manga.slug} title={manga.title} key={manga.slug} />)
                })}
                <div className="carousel-item w-1/3 overflow-y-hidden flex flex-col place-content-center text-center">
                    <Link to={`view-all/${category}`} state={{ previousPage: "Home" }}>
                        <div className="card  rounded-none gap-1 h-full  ">
                            <div className="card-body h-1/6 p-0">
                                <p className="card-title text-2xl text-slate-50 line-clamp-2">See All</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default HomeCarousel