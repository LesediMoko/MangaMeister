import { Link } from "react-router-dom"
import { ITrendingMangaApp } from "../../common/types/app-types"

const HomeCarouselList = ({ slug, title, coverImage }: ITrendingMangaApp) => {
    return (
        <div className="carousel-item w-1/3 overflow-y-hidden">
            <Link to={`view-manga/${slug}`}>
                <div className="card shadow-xl rounded-none gap-1 h-full">
                    <figure className="h-4/5 w-full"><img src={coverImage} alt={title} className="w-full h-full image-full object-cover" /></figure>
                    <div className="card-body h-1/6 p-0">
                        <h2 className="card-title text-xs text-slate-50 text-clip text-ellipsis line-clamp-2">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default HomeCarouselList