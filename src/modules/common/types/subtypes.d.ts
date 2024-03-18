export interface IRelateFrom {
    relate_to: IRelateTo;
    md_relates: IMDRelates;
}

export interface IMDCover {
    w: number;
    h: number;
    b2key: string;
}

export interface IRelates {
    title: string;
    slug: string;
    hid: string;
    md_covers: IMDCoversComic[];
}

export interface IRecommendation {

    up: number;
    down: number;
    total: number;
    relates: IRelates
}

export interface IMDRelates {
    name: string;
}
export interface IRelateTo {
    slug: string;
    title: string;
}

export interface IFirstChapter {
    chap: string | null;
    hid: number;
    lang: string;
    group_name: string[];
    vol: number;
}

export interface IMDTitle {
    title: string;
    lang: string;
}

export interface IMDCoversComic {
    vol: string;
    w: number;
    h: number;
    b2key: string;
}
export interface IMDGenre {
    name: string;
    type: string;
    slug: string;
    group: string;
}
export interface IMDComicMDGenre {
    md_genres: IMDGenre;
}

export interface IArtist {
    name: string;
    slug: string;
}

export interface IAuthor {
    name: string;
    slug: string;
}

export interface IMUPublisher {
    title: string;
    slug: string;
}

export interface IMUCategory {
    title: string;
    slug: string;
}

export interface IMUComicCategory {
    mu_comic_categories: IMUCategory;
    positive_vote: number;
    negative_vote: number;
}

export interface IMUComics {
    mu_comic_publishers: IMUPublisher[];
    licensed_in_english: boolean;
    mu_comic_categories: IMUComicCategory[];
}

export interface ILinks {
    al: string;
    ap: string;
    bw: string;
    kt: string;
    mu: string;
    amz: string;
    cdj: string;
    ebj: string;
    mal: string;
    raw: string;
    engtl: string;
}

export interface IComic {
    id: number;
    hid: string;
    title: string;
    country: string;
    status: number;
    links: ILinks;
    last_chapter: number;
    chapter_count: number;
    demographic: number;
    follow_rank: number;
    comment_count: number;
    follow_count: number;
    desc: string;
    parsed: string;
    slug: string;
    mismatch: unknown | null;
    year: number;
    bayesian_rating: number;
    rating_count: number;
    content_rating: string;
    translation_completed: boolean;
    chapter_numbers_reset_on_new_volume_manual: boolean;
    final_chapter: string | null;
    final_volume: string | null;
    noindex: boolean;
    adsense: boolean;
    recommendations: IRecommendation[];
    relate_from: IRelateFrom[];
    md_titles: IMDTitle[];
    md_comic_md_genres: IMDComicMDGenre[];
    md_covers: IMDCoversComic[];
    mu_comics: IMUComics;
    iso639_1: string;
    lang_name: string;
    lang_native: string;
}

export interface IMDGroup {
    title: string;
    slug: string?;
}

export interface IMDChaptersGroup {
    md_groups: IMDGroup[];
}

export interface IChapter {
    id: number;
    chap: string;
    title: string;
    vol: string | null;
    lang: string;
    created_at: string;
    updated_at: string;
    up_count: number;
    down_count: number;
    is_the_last_chapter: boolean;
    group_name: string[];
    hid: string;
    identities: string | null;
    md_chapters_group: IMDChaptersGroup[];

}

export interface IAdjacentChapter {
    chap: string;
    vol: string | null;
    title: string;
    hid: string;
    lang: string;
    id: number;
    href: string?;
}

export interface IDupGroupChapter {
    id: number;
    hid: string;
    chap: string;
    group_name: string[];
    md_chapters_groups: IMDChaptersGroup[];
}

export interface IChapterLangList {
    lang: string;
    hid: string;
}

export interface IMDImages {
    h: number;
    w: number;
    name: string;
    s: number;
    b2key: string;
    optimized: number | null;
}

export interface IChapterMUComics {
    mu_comic_publishers: IMUPublisher[];
}

export interface IChaptersMDChaptersGroup {
    md_group_id: number;
    md_groups: IMDGroup;
}

export interface IMDComic {
    id: number;
    title: string;
    country: string;
    slug: string;
    desc: string;
    links: ILinks;
    genres: number[];
    hid: string;
    content_rating: string;
    chapter_numbers_reset_on_new_volume_manual: boolean;
    noindex: boolean;
    mu_comics: IChapterMUComics;
    md_covers: IMDCoversComic[];

}

export interface IChapterFullInfo {
    id: number;
    chap: string;
    vol: string | null;
    title: string | null;
    hid: string;
    group_name: string[];
    chapter_id: number | null;
    created_at: string;
    updated_at: string;
    crawled_at: string;
    mdid: string | null;
    comment_count: number;
    up_count: number;
    down_count: number;
    status: string;
    adsense: boolean;
    lang: string;
    is_the_last_chapter: boolean;
    md_covers: IMDCover[];
    md_images: IMDImages[];
    md_chapters_groups: IChaptersMDChaptersGroup[];

}

export interface ITrendingManga {
    id: number;
    title: string | null;
    slug: string;
    content_rating: string;
    genres: number[];
    demographic: number | null;
    md_covers: IMDCover[];
}

export interface ITrending {
    "7": ITrendingManga[];
    "30": ITrendingManga[];
    "90": ITrendingManga[];
}

export interface IRank {
    title: string | null;
    slug: string;
    content_rating: string;
    genres: number[];
    demographic: number | null;
    md_covers: IMDCover[];
}

export interface IRecentRank {
    title: string | null;
    slug: string;
    content_rating: string;
    genres: number[];
    demographic: number;
    last_chapter: number;
    md_covers: IMDCover[];
}

export interface IIdentities {
    id: string;
    traits: {
        username: string;
        id: string;
        gravatar: string;
    }

}

export interface IFollowsMDComics {
    id: number;
    title: string;
    content_rating: string;
    slug: string;
    follow_count: number;
    demographic: string | null;
    genres: number[];
    md_covers: IMDCover[];

}

export interface IFollows {
    created_at: string;
    identities: IIdentities;
    md_comics: IFollowsMDComics;

}

export interface INews {
    title: string;
    slug: string;
    content_rating: string;
    created_at: string;
    last_chapter: number;
    genres: number[];
    demographic: number | null;
    md_covers: IMDCover[];
    count?: number;
}

export interface ITopFollowComic {
    "7": INews[];
    "30": INews[];
    "90": INews[];
}

export interface IComicsByCurrentSeasonData {
    id: number;
    title: string;
    slug: string;
    content_rating: string;
    genres: number[];
    demographic: number | null;
    last_chapter: number;
    desc: string;
    md_covers: IMDCover[];
    user_follow_count: number;
    follow_rank: number;
    mies: IMies;
    hid: string;
    created_at: string;
    status: number;

}

export interface IPromotionalVideo {
    title: string;
    youtubeId: string;
}

export interface IMies {
    id: number;
    type: string;
    title: string;
    rating: string;
    rating_count: number;
    desc: string;
    slug: string;
    year: number | null;
    image: string;
    status: string;
    volumes: string | null;
    chapters: number | null;
    english_title: string;
    japanese_title: string;
    published_date: string;
    completed_date: string | null;
    ranked: number;
    popularity: number;
    background: string | null;
    members: number;
    favourites: number | null;
    myid: number;
    episodes: number;
    duration: string;
    premiered: string | null;
    broadcast: string;
    source: string;
    age_restricted: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    version: number;
    my_producer_id: string | null;
    type_url: string;
    crawl: boolean;
    anidb_id: string | null;
    links: string | null;
    promotional_videos: IPromotionalVideo[];
    has_file: boolean;
    crawled_at: string;

}

export interface IComicsByCurrentSeason {
    year: number;
    season: string;
    data: IComicsByCurrentSeasonData[];
}