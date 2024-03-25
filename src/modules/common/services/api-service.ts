import { IChapterInfoAPIResponse, IChaptersAPIResponse, IComicAPIResponse, ITopComicsAPIResponse } from "../types/api-types";

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
    const response = await fetch(`${baseUrl}/comic/${hid}/chapters?limit=${Math.floor(chapterTotal)}&lang=en`);
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