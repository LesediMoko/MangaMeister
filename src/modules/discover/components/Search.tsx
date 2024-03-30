
import SearchInput from "./SearchInput";
import { SearchProvider } from "./SearchProvider";

const Search = () => {
    return (
        <SearchProvider>
            <div className="flex flex-col dropdown">
                <SearchInput />
            </div>
        </SearchProvider>
    )
}

export default Search