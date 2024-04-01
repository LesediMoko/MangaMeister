import { IChapterInfoAPIResponse, IChaptersAPIResponse, IComicAPIResponse, IGenreListAPIResponse, ITopComicsAPIResponse } from "../types/api-types";

const baseUrl = 'https://api.comick.io';

export const fetchTrendingMangas = async (): Promise<ITopComicsAPIResponse> => {
    const response = await fetch(`${baseUrl}/top?comic_types=manga&accept_mature_content=false`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
};

export const fetchComicInfo = async (slug: string): Promise<IComicAPIResponse> => {
    const response = await fetch(`${baseUrl}/comic/${slug}`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
};

export const fetchChapterListInfo = async (hid: string, chapterTotal: number): Promise<IChaptersAPIResponse> => {
    const response = await fetch(`${baseUrl}/comic/${hid}/chapters?limit=${Math.floor(chapterTotal) * 20}&lang=en`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
};

export const fetchChapterInfo = async (hid: string): Promise<IChapterInfoAPIResponse> => {
    const response = await fetch(`${baseUrl}/chapter/${hid}`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
};

export const fetchAllGenres = async (): Promise<IGenreListAPIResponse[]> => {
    const response = await fetch(`${baseUrl}/genre/`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
};

export const fetchSearchResults = async (searchQuery: string): Promise<ITopComicsAPIResponse> => {
    const response = await fetch(`${baseUrl}/v1.0/search/?type=comic&q=${searchQuery}&t=false`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
}

export const fetchGenreFilterResults = async (genres: string[]): Promise<ITopComicsAPIResponse> => {

    const response = await fetch(`${baseUrl}/v1.0/search/?type=comic&genre=${genres.join(',')}&t=false`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
}

export const fetchStatusFilterResults = async (status: number): Promise<ITopComicsAPIResponse> => {
    const response = await fetch(`${baseUrl}/v1.0/search/?type=comic&status=${status}&t=false`);
    if (!response.ok) {
        throw new Error('Network call failed');
    }
    return response.json();
}