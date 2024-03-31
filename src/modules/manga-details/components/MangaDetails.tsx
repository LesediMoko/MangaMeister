import { useQuery } from '@tanstack/react-query';
import { ISelectedManga, ISelectedChapter } from '../../common/types/app-types';
import { fetchChapterListInfo, fetchComicInfo } from '../../common/services/api-service';
import useMangaStore from '../../common/stores/store';
import { chapterListResponseFilter, comicResponseFilter } from '../../common/helpers/response-filters';
import ChapterList from './ChapterList';
import { useParams } from 'react-router';
import NavBar from '../../common/components/NavBar';
import { useLocation } from 'react-router-dom';
import { MdHistoryEdu } from "react-icons/md";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import ReactMarkdown from 'react-markdown'


const MangaDetails = () => {
    const { selectedSlug } = useParams()
    const { state } = useLocation()
    const previousPage = state.previousPage
    console.log(window.location.pathname)
    const { isPending: isPendingComic, error: errorComic, data: comicInfo } = useQuery({
        queryKey: ['fetchComicInfo', selectedSlug],
        queryFn: () => fetchComicInfo(selectedSlug ?? ''),
        enabled: !!selectedSlug
    })


    const comicHid = comicInfo?.comic?.hid;
    const comicChapterTotal = comicInfo?.comic?.last_chapter;

    const { isPending: isPendingChapterList, error: errorChapterList, data: chapterListInfo } = useQuery({
        queryKey: ['fetchChapterList', comicHid],
        queryFn: () => fetchChapterListInfo(comicHid ?? '', comicChapterTotal ?? 0),
        enabled: !!comicHid && !!comicChapterTotal
    })

    if (isPendingComic || isPendingChapterList) {
        return <><NavBar previousPage={previousPage} /><div>Loading...</div></>
    }

    if (errorComic || errorChapterList) {
        return <><NavBar previousPage={previousPage} /><div>Error: {String(errorComic ?? errorChapterList ?? '')}</div></>
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
            <div className='bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary min-h-screen max-h-full overflow-y-scroll'>
                <NavBar previousPage={previousPage} />
                <div className="flex flex-col w-full gap-4 pl-4 md:flex-row mt-20 place-self-center">
                    <img className='h-1/2 w-3/5 place-self-center p-2 m-4 rounded-xl border md:h-80 md:place-self-start md:w-1/6' src={useMangaStore.getState().selectedManga?.coverImage} alt={`${useMangaStore.getState().selectedManga?.title} Cover`} />
                    <div className='flex flex-col gap-4 pl-4 md:text-left md:flex-col md:justify-center md:place-items-start'>
                        <h3 className="card-title  text-4xl">{useMangaStore.getState().selectedManga?.title}</h3>
                        <div className='flex flex-row gap-2 mr-4'>
                            <MdHistoryEdu />
                            {useMangaStore.getState().selectedManga?.authors.map(author => (


                                <p key={author.slug}>{`${author.name} `}&nbsp;&nbsp;</p>

                            )
                            )}
                        </div>
                        <div className='flex flex-row gap-2 mr-4'>
                            <HiOutlinePaintBrush />
                            {useMangaStore.getState().selectedManga?.artists.map(author => (


                                <p key={author.slug}>{`${author.name} `}&nbsp;&nbsp;</p>

                            )
                            )}
                        </div>
                        <p>{useMangaStore.getState().selectedManga?.chapterTotal} Chapters</p>

                        <h5 className='md:hidden'>Description</h5>
                        <ReactMarkdown className='pb-8 md:place-content-end mr-4'>{useMangaStore.getState().selectedManga?.description}</ReactMarkdown>
                    </div>
                </div>
                <ChapterList listOfChapters={useMangaStore.getState().selectedManga!.chapterList} />

            </div>
        </>
    );
};



export default MangaDetails;