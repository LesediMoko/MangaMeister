import { Link } from "react-router-dom";
import { ITrendingMangaApp } from "../../common/types/app-types";

const TrendingList = ({ slug, title, coverImage }: ITrendingMangaApp) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full carousel-item h-full">
            <figure className="w-full rounded-none"><img src={coverImage} alt={`Trending Manga: ${title}`} className="rounded-none w-full object-top" /></figure>
            <div className="card-body w-full rounded-none justify-between">
                <h2 className="card-title w-full text-center inset-0">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`view-manga/${slug}`} className="btn btn-primary">Read</Link>
                </div>
            </div>
        </div>

    )
}

export default TrendingList;