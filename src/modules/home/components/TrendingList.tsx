import { Link } from "react-router-dom";
import { ITrendingMangaApp } from "../../common/types/app-types";

const TrendingList = ({ slug, title, coverImage }: ITrendingMangaApp) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 shadow-xl carousel-item flex flex-col gap-10 justify-center h-full relative items-center text-center bg-cover" style={{ backgroundImage: `url('${coverImage}')`, backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
            <div className="w-full shadow-xl h-full absolute z-10 bg-dark-primary opacity-65"></div>
            <h2 className="card-title w-full text-center text-2xl ml-6 mr-6 line-clamp-2 z-20 items-center justify-center text-light-primary">{title}</h2>
            <div className="card-actions">
                <Link to={`view-manga/${slug}`} className="btn bg-light-primary text-light-secondary z-20 text-lg" state={{ previousPage: "Home" }}>Read</Link>
            </div>
        </div>

    )
}

export default TrendingList;