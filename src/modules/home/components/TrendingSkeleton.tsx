const TrendingSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="carousel carousel-end bg-slate-600 h-80 w-full mb-10">
                <div className="carousel-item w-1/3 overflow-y-hidden">
                    <a>
                        <div className="card shadow-xl rounded-none gap-1 h-full">
                            <figure className="h-4/5 w-full"><div className="w-full h-full image-full object-cover" /></figure>
                            <div className="card-body h-1/6 p-0 ">
                                <h2 className="card-title text-xs "></h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TrendingSkeleton;