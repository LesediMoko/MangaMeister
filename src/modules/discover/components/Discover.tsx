import { useQuery } from "@tanstack/react-query"
import BottomNav from "../../common/components/BottomNav"
import { fetchAllGenres } from "../../common/services/api-service"
import useMangaStore from "../../common/stores/store"
import Search from "./Search"
import OptionAccordion from "./OptionAccordion"
import ResultList from "./ResultList"
import DiscoverSkeleton from "./DiscoverSkeleton"
import LoadErrorPage from "../../error-page/LoadErrorPage"
import React from "react"

const Discover = () => {
    const { isPending: isPendingGenre, isError, data: allGenres } = useQuery({
        queryKey: ['allGenreQueryKey'],
        queryFn: fetchAllGenres
    })



    if (isError)
        return <LoadErrorPage />

    if (isPendingGenre)
        return <DiscoverSkeleton />
    if (allGenres) {
        useMangaStore.setState({ genreList: allGenres })

        return (

            <div className="flex flex-col bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary gap-4 min-h-screen max-h-full overflow-y-scroll">
                <h1 className="place-self-center text-3xl mt-4">Discover</h1>
                <Search />
                <OptionAccordion />
                {useMangaStore.getState().selectedFilterType != "" && <ResultList />}


                <BottomNav activePage="Discover" />
            </div>
        )
    }
}
export default Discover