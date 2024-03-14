import { ITopComicsAPIResponse } from "../types/api-types";

export const fetchTrendingMangas = async (): Promise<ITopComicsAPIResponse> => {
    const response = await fetch('https://api.comick.io/top?comic_types=manga&accept_mature_content=false');
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
};