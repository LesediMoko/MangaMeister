import { Link } from 'react-router-dom'
import { IChapterListProps } from '../../common/types/app-types'
import Votes from './Votes'

const ChapterList = ({ listOfChapters }: IChapterListProps) => {
    return (
        <ul className="menu w-full rounded-box">
            <li className="menu-title">Chapters: </li>
            {listOfChapters.map((chapter) => {
                return chapter.title &&
                    (<li className="p-2" key={chapter.hid}>
                        <span>
                            <Link to={`${chapter.hid}`}>{`${chapter.chapterNumber} - ${chapter.title}`}</Link>
                            <Votes upVotes={chapter.upCount} position='text-right' />
                        </span>
                    </li>)
            })}
        </ul>
    )
}

export default ChapterList