import { Link } from "react-router-dom";
import { getViewAllCategoryHeading } from "../common/helpers/mappings";

const ListofAllItems = ({ title, coverImage, slug, category }: { title: string; coverImage: string, slug: string, category: string }) => {

    return (
        <Link to={`/view-manga/${slug}`} state={{ previousPage: getViewAllCategoryHeading(category) }} className="w-[30%] mb-4">
            <div className="card lg:h-full  rounded-none gap-1 ">
                <figure className="h-56 lg:h-full w-full "><img src={coverImage} alt={title} className="w-full h-56 lg:h-full image-full object-cover" /></figure>
                <div className="card-body p-0">
                    <h2 className="card-title text-xs md:text-base lg:text-lg text-slate-50 line-clamp-2">{title}</h2>
                </div>
            </div>
        </Link>
    );

}

export default ListofAllItems