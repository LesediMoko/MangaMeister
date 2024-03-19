import { useQuery } from '@tanstack/react-query';
import { ISelectedManga, ISelectedChapter } from '../../common/types/app-types';
import { fetchChapterListInfo, fetchComicInfo } from '../../common/services/api-service';
import useMangaStore from '../../common/stores/store';
import { chapterListResponseFilter, comicResponseFilter } from '../../common/helpers/response-filters';
import ChapterList from './ChapterList';
import { useParams } from 'react-router';


const MangaDetails = () => {
    const { selectedSlug } = useParams()
    const { isPending: isPendingComic, error: errorComic, data: comicInfo } = useQuery({
        queryKey: ['fetchComicInfo', selectedSlug],
        queryFn: () => fetchComicInfo(selectedSlug ?? ''),
        enabled: !!selectedSlug
    })


    const comicHid = comicInfo?.comic.hid;
    const comicChapterTotal = comicInfo?.comic.last_chapter;

    const { isPending: isPendingChapterList, error: errorChapterList, data: chapterListInfo } = useQuery({
        queryKey: ['fetchChapterList', comicHid],
        queryFn: () => fetchChapterListInfo(comicHid ?? '', comicChapterTotal ?? 0),
        enabled: !!comicHid && !!comicChapterTotal
    })

    if (isPendingComic || isPendingChapterList) {
        return <div>Loading...</div>
    }

    if (errorComic || errorChapterList) {
        return <div>Error: {String(errorComic ?? errorChapterList ?? '')}</div>
    }

    const currentChapterList: ISelectedChapter[] = chapterListResponseFilter(chapterListInfo)
    const currentManga: ISelectedManga = comicResponseFilter(comicInfo, selectedSlug!, currentChapterList);
    useMangaStore.setState({ selectedManga: currentManga })
    useMangaStore.setState({ chapters: currentChapterList })

    if (useMangaStore.getState().selectedManga == null) {
        return <div>{`${currentManga.title} is not available.`}</div>
    }

    return (
        <>
            <div className="flex flex-col w-full gap-4 pl-4 md:flex-row">
                <img className='h-1/2 w-3/5 place-self-center p-2 m-4 rounded-xl border md:h-80 md:place-self-start md:w-1/6' src={useMangaStore.getState().selectedManga?.coverImage} alt={`${useMangaStore.getState().selectedManga?.title} Cover`} />
                <h3 className="card-title md:place-self-center text-4xl">{useMangaStore.getState().selectedManga?.title}</h3>
                <div className='flex flex-row md:place-self-center'>
                    {useMangaStore.getState().selectedManga?.authors.map(author => (<p key={author.slug}>{`${author.name} `}</p>))}
                    <p>&nbsp;| {useMangaStore.getState().selectedManga?.chapterTotal} Chapters</p>
                </div>
                <h5 className='md:hidden'>Description</h5>
                <p className='pb-8 md:place-self-end md:-ml-80'>{useMangaStore.getState().selectedManga?.description}</p>
            </div>
            <ChapterList listOfChapters={useMangaStore.getState().selectedManga!.chapterList} />

        </>
    );
};



export default MangaDetails;