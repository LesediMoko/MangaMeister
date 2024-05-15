import { SetStateAction } from "react";
import SearchDropdown from "./SearchDropdown";
import { useSearchContext } from "./SearchProvider";
import React from "react";

const SearchInput = () => {
    const searchContext = useSearchContext();
    const setSearchTerm = searchContext?.setSearchTerm;

    function handleSearchChange(event: { target: { value: SetStateAction<string>; }; }) {
        setSearchTerm?.(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                className="place-self-center input input-bordered w-full max-w-xs"

                onChange={handleSearchChange}
            />
            <SearchDropdown />
        </>
    )
};

export default SearchInput
