import { useQuery } from "@tanstack/react-query";
import { fetchSearchResults } from "../services/api-service";
import { ISearchAPIResponse } from "../types/api-types";
import { useEffect, useState } from "react";

export function useSearch(searchTerm: string): { data: ISearchAPIResponse[] | undefined, error: Error | null, isPending: boolean } {


    return useQuery({
        queryKey: ["search", searchTerm],
        queryFn: () => fetchSearchResults(searchTerm),
    });

}

export function useFilter(filterPayload: string[] | number | null, filterFunction: (arg0: string[] | number | null) => void): { data: ISearchAPIResponse[] | undefined, error: Error | null, isPending: boolean } {


    return useQuery({
        queryKey: ["filter", filterPayload],
        queryFn: () => filterFunction(filterPayload),
    });

}

export function useDebounce(searchTerm: string, delay: number) {
    const [debouncedSearchTerm, setDebouncedValue] = useState(searchTerm);

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(searchTerm);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [searchTerm, delay]
    );

    return debouncedSearchTerm;
}
