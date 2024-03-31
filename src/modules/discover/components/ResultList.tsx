import { useEffect, useState } from "react";
import { useFilter } from "../../common/helpers/custom-hooks";
import { getFilterRequestAndPayload } from "../../common/helpers/mappings";
import useMangaStore from "../../common/stores/store";
import { MagicMotion } from "react-magic-motion";
import ResultListItem from "./ResultListItem";
import Pagination from "../../common/components/Pagination";

const ResultList = () => {
    const { apiRequest, payload } = getFilterRequestAndPayload(useMangaStore.getState().selectedFilterType)!
    const { isPending, data, error } = useFilter(payload, apiRequest)
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [mangasPerPage] = useState(3);

    const [, forceUpdate] = useState({});

    useEffect(() => {
        if (payload != -1 || payload?.toString() != "") {
            const unsubscribe = useMangaStore.subscribe(() => {

                forceUpdate({});
            });

            return () => unsubscribe();
        }
    }, [useMangaStore.getState().selectedGenres, useMangaStore.getState().selectedStatus, useMangaStore.getState().selectedFilterType]);

    if (isPending)
        return <div>Loading...</div>

    if (error)
        return <div>Error: {error.message}</div>

    if (data) {
        const indexOfLastRecord = currentPage * mangasPerPage;
        const indexOfFirstRecord = indexOfLastRecord - mangasPerPage;
        const filteredData = data.filter(dataItem => dataItem.content_rating === "safe")
        const currentPageMangas = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

        return (
            <div className="flex flex-col gap-8">
                <p className="place-self-center text-2xl mt-4">
                    Results
                </p>
                <div className="w-fit h-fit place-self-center">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="enter title..." id="searchInput" maxLength={70} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <MagicMotion>
                    <div className="flex flex-row flex-wrap w-full gap-2 justify-evenly">
                        {currentPageMangas
                            .filter(({ title }) => title
                                .toLowerCase()
                                .trim()
                                .includes(searchText.toLowerCase().trim())
                            )
                            .map((item) => (
                                <ResultListItem key={item.slug} title={item.title} coverImage={useMangaStore.getState().imageUrlPrefix + item.md_covers[0].b2key} slug={item.slug} />
                            ))}
                    </div>
                </MagicMotion>
                <Pagination totalMangas={filteredData.length} mangasPerPage={mangasPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        )
    }
}

export default ResultList;