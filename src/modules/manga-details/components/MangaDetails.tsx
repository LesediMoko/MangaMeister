import { useQuery } from '@tanstack/react-query';
import { ISelectedManga, ISelectedChapter } from '../../common/types/app-types';
import { fetchChapterListInfo, fetchComicInfo } from '../../common/services/api-service';
import useMangaStore from '../../common/stores/store';
import { chapterListResponseFilter, comicResponseFilter, getScanGroups } from '../../common/helpers/response-filters';
import ChapterList from './ChapterList';
import { useParams } from 'react-router';
import NavBar from '../../common/components/NavBar';
import { useLocation } from 'react-router-dom';
import { MdHistoryEdu } from "react-icons/md";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import ReactMarkdown from 'react-markdown'
import {  useState } from 'react';
import MangaDetailsSkeleton from './MangaDetailsSkeleton';
import LoadErrorPage from '../../error-page/LoadErrorPage';
import React from 'react';
import Recommendations from './Recommendations';


const MangaDetails = () => {
    const { selectedSlug } = useParams()
    const { state } = useLocation()
    const previousPage = state && state?.previousPage ? state.previousPage : 'Home'

    const { isPending: isPendingComic, isError: errorComic, data: comicInfo } = useQuery({
        queryKey: ['fetchComicInfo', selectedSlug],
        queryFn: () => fetchComicInfo(selectedSlug ?? ''),
        enabled: !!selectedSlug
    })

    const [selectedScans, setSelectedScans] = useState<string[]>([])
    const [initialRender, setInitialRender] = useState(false)
   


    const comicHid = comicInfo?.comic?.hid;
    const comicChapterTotal = comicInfo?.comic?.last_chapter;
    

    const { isPending: isPendingChapterList, isError: errorChapterList, data: chapterListInfo } = useQuery({
        queryKey: ['fetchChapterList', comicHid],
        queryFn: () => fetchChapterListInfo(comicHid ?? '', comicChapterTotal ?? 0),
        enabled: !!comicHid 
    })

    
  

    if (isPendingComic || isPendingChapterList) {
        return (<MangaDetailsSkeleton />)
    }

    
    

    if (errorComic || errorChapterList) {
       
        return (<LoadErrorPage />)
    }

    const currentChapterList: ISelectedChapter[] = chapterListResponseFilter(chapterListInfo)
    const currentManga: ISelectedManga = comicResponseFilter(comicInfo, selectedSlug!, currentChapterList);
    useMangaStore.setState({ selectedManga: currentManga })
    useMangaStore.setState({ chapters: currentChapterList })

    if (selectedScans.length === 0 && !initialRender) {
        setSelectedScans([getScanGroups()[0]])
        setInitialRender(true)
    }

    if (useMangaStore.getState().selectedManga == null) {
        return <div>{`${currentManga.title} is not available.`}</div>
    }

    const handleCheckBoxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const checked = e.target.checked;


        if (checked) {
            setSelectedScans((prevValues) => [...prevValues, value]);
        } else {

            setSelectedScans((prevValues) => prevValues.filter((item) => item !== value));
        }
    }

    return (
        <>
            <div className='bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary min-h-screen max-h-full overflow-y-scroll'>
                <NavBar previousPage={previousPage} />
                <div className="flex flex-col w-full gap-4 pl-4 md:flex-row mt-20 place-self-center mb-10">
                    <img className='h-1/2 w-3/5 place-self-center p-2 m-4 rounded-xl border md:h-80 md:place-self-start md:w-1/6' src={useMangaStore.getState().selectedManga?.coverImage} alt={`${useMangaStore.getState().selectedManga?.title} Cover`} />
                    <div className='flex flex-col gap-4 pl-4 md:text-left md:flex-col md:justify-center md:place-items-start'>
                        <h3 className="card-title  text-4xl">{useMangaStore.getState().selectedManga?.title}</h3>
                        <div className='flex flex-row gap-2 mr-4'>
                            <MdHistoryEdu />
                            {useMangaStore.getState().selectedManga?.authors.map(author => (


                                <p key={author.slug}>{`${author.name} `}</p>

                            )
                            )}
                        </div>
                        <div className='flex flex-row gap-2 mr-4'>
                            <HiOutlinePaintBrush />
                            {useMangaStore.getState().selectedManga?.artists.map(author => (


                                <p key={author.slug}>{`${author.name} `}</p>

                            )
                            )}
                        </div>
                        
                        <p>{useMangaStore.getState().selectedManga?.chapterTotal} Chapters</p>

                        <h5 className='md:hidden'>Description</h5>
                        <ReactMarkdown className='pb-8 md:place-content-end mr-4'>{useMangaStore.getState().selectedManga?.description}</ReactMarkdown>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Filter Scan Group</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                {getScanGroups().map(scanGroup => (<label className="label cursor-pointer" key={scanGroup}>
                                    <span className="label-text">{scanGroup}</span>
                                    <input type="checkbox" value={scanGroup} checked={selectedScans.includes(scanGroup)} className="checkbox" onChange={(e) => handleCheckBoxClick(e)} />
                                </label>))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div role="tablist" className="tabs tabs-lifted w-full">
                <ChapterList listOfChapters={useMangaStore.getState().selectedManga!.chapterList.filter(chapter => selectedScans.includes(chapter.groupName))} />
                <Recommendations recommendations={currentManga.recommendations} currentPageMangaTitle={useMangaStore.getState().selectedManga?.title ?? "Home"}/>
                
                </div>
            </div>
        </>
    );
};



export default MangaDetails;