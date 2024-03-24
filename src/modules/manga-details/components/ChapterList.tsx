import { Link } from 'react-router-dom'
import { IChapterListProps } from '../../common/types/app-types'
import Votes from './Votes'

const ChapterList = ({ listOfChapters }: IChapterListProps) => {
    return (
        <ul className="menu w-full rounded-box">
            <li className="menu-title">Chapters: </li>
            {listOfChapters.map((chapter) => {
                return chapter.title &&
                    (<Link to={`${chapter.hid}`}>
                        <li className="p-2" key={chapter.hid}>
                            <span>
                                {`${chapter.chapterNumber} - ${chapter.title}`}
                                <Votes upVotes={chapter.upCount} />
                            </span>
                        </li>
                    </Link>)
            })}
        </ul>
    )
}

export default ChapterList