import { Link } from "react-router-dom"
import useMangaStore from "../../common/stores/store"
import { useDebounce, useSearch } from "../../common/helpers/custom-hooks";
import { useSearchContext } from "./SearchProvider";

const SearchDropdown = () => {
    const searchTerm = useSearchContext()?.searchTerm;
    const debouncedSearch = useDebounce(searchTerm!, 500);

    const { data } = useSearch(debouncedSearch);
    if (!data) return null;
    if (!searchTerm) return null;
    const filteredData = data.filter(item => item.content_rating === "safe")
    return (
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full place-self-center mt-16 m-4">
            {filteredData!.slice(0, 4).map((item) => (
                <li key={item.slug} className="h-1/3 w-full border-b-2">
                    <Link to={`/view-manga/${item.slug}`} state={{ previousPage: "Discover" }} className="flex flex-row gap-4">
                        <div className="w-1/4  h-40 bg-cover bg-center bg-no-repeat flex flex-col justify-end rounded-lg" style={{ backgroundImage: `url(${useMangaStore.getState().imageUrlPrefix}${item.md_covers[0].b2key})` }}>

                        </div>
                        <div className="w-3/4 flex flex-col gap-4">
                            <strong className="place-self-center rounded h-1/6 line-clamp-1">{item.title}</strong>
                            <p className=" line-clamp-3">{item.desc}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}


export default SearchDropdown