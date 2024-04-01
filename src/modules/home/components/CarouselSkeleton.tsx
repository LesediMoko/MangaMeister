import { getCarouselDetails } from "../../common/helpers/mappings"

const CarouselSkeleton = ({ category }: { category: string }) => {
    const { heading } = getCarouselDetails(category)
    return (
        <div className="flex flex-col h-80 ml-2 mr-2 mb-10 animate-pulse">
            <div className="flex flex-row justify-between mb-2 ml-2 mr-2">
                <p>{heading}</p>
                <p>...</p>
            </div>
            <div className="carousel gap-2 ">
                <div className="carousel-item w-1/3 overflow-y-hidden bg-neutral-600">
                    <a>
                        <div className="card shadow-xl rounded-none gap-2 h-full bg-neutral-600">
                            <figure className="h-4/5 w-full bg-neutral-600"><div className="w-full image-full object-cover h-44" /></figure>
                            <div className="card-body h-1/6 p-0">
                                <h2 className="card-title text-xs bg-neutral-300 h-10"></h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="carousel-item w-1/3 overflow-y-hidden bg-neutral-600">
                    <a>
                        <div className="card shadow-xl rounded-none gap-2 h-full bg-neutral-600">
                            <figure className="h-4/5 w-full bg-neutral-600"><div className="w-full image-full object-cover h-44" /></figure>
                            <div className="card-body h-1/6 p-0">
                                <h2 className="card-title text-xs bg-neutral-300 h-10"></h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="carousel-item w-1/3 overflow-y-hidden bg-neutral-600">
                    <a>
                        <div className="card shadow-xl rounded-none gap-2 h-full bg-neutral-600">
                            <figure className="h-4/5 w-full bg-neutral-600"><div className="w-full image-full object-cover h-44" /></figure>
                            <div className="card-body h-1/6 p-0">
                                <h2 className="card-title text-xs bg-neutral-300 h-10"></h2>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default CarouselSkeleton