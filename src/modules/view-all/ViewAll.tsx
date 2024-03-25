import { useEffect, useState } from "react";
import { getHomeCarouselState, getViewAllCategoryHeading } from "../common/helpers/mappings"
import { MagicMotion } from "react-magic-motion";
import ListofAllItems from "./ListofAllItems";
import { useParams } from "react-router-dom";
import { ITrendingMangaApp } from "../common/types/app-types";
import NavBar from "../common/components/NavBar";


const ViewAll = () => {
    const [category] = useState(useParams()['category'])
    const [mangaListState, setMangaListState] = useState<ITrendingMangaApp[]>([])
    const heading = getViewAllCategoryHeading(category!);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setMangaListState(getHomeCarouselState(category!))

    }, [])

    return (
        <div className="bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary h-full flex flex-col gap-4">
            <NavBar previousPage="Home" />
            <p className="place-self-center text-2xl">
                {heading}
            </p>
            <div className="w-fit h-fit place-self-center mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="enter title..." id="searchInput" maxLength={70} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <MagicMotion>
                <div className="flex flex-row flex-wrap w-full gap-2 justify-evenly">
                    {mangaListState.slice(0, 12)
                        .filter(({ title }) => title
                            .toLowerCase()
                            .trim()
                            .includes(searchText.toLowerCase().trim())
                        )
                        .map(({ slug, title, coverImage }) => (
                            <ListofAllItems key={slug} title={title} coverImage={coverImage} slug={slug} category={category!} />
                        ))}
                </div>
            </MagicMotion>
        </div>
    );
}

export default ViewAll