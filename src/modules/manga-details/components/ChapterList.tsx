import { Link } from 'react-router-dom'
import { IChapterListProps } from '../../common/types/app-types'
import Votes from './Votes'
import useMangaStore from '../../common/stores/store'
import { BiBookReader } from "react-icons/bi";

const ChapterList = ({ listOfChapters }: IChapterListProps) => {
    return (
        <>
  <input type="radio" name="my_tabs_2" role="tab" className="tab ml-[2.5rem]" aria-label="Chapters" checked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-1 w-full">
        <ul className="menu w-full rounded-box flex flex-col">
            <li className="menu-title">Chapters: </li>
            {listOfChapters.map((chapter) => {
               
                return chapter.title ?
                    (<Link to={`${chapter.hid}`} key={chapter.hid}>
                        <li className="p-2 lg:text-lg" key={chapter.hid}>
                            <span className=''>
                                <p className='text-left'>{`${chapter.chapterNumber} - ${chapter.title}`}</p>
                                {useMangaStore.getState().selectedChapter && chapter.hid == useMangaStore.getState().selectedChapter?.hid && useMangaStore.getState().selectedChapter?.hid && <BiBookReader className='place-self-center text-center'/>}
                                <Votes upVotes={chapter.upCount} />
                            </span>
                        </li>
                    </Link>) : (<Link to={`${chapter.hid}`} key={chapter.hid}>
                        <li className="p-2 lg:text-lg" key={chapter.hid}>
                            <span>
                                <p className='text-left'>{`Chapter ${chapter.chapterNumber}`}</p>
                                {useMangaStore.getState().selectedChapter && chapter.hid == useMangaStore.getState().selectedChapter?.hid && useMangaStore.getState().selectedChapter?.hid && <BiBookReader className='place-self-center text-center'/>}
                                <Votes upVotes={chapter.upCount} />
                                
                            </span>
                        </li>
                    </Link>)
            })}
        </ul>
    </div>
    </>
    )
}

export default ChapterList