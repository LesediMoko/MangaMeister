import { Link } from "react-router-dom"
import { ISelectedChapter, ISelectedManga } from "../../common/types/app-types"

const ContinueReading = ({ manga, scrollPosition, selectedChapter }: { manga: ISelectedManga, scrollPosition: { chapterID: string, position: number }, selectedChapter : ISelectedChapter | null }) => {
    return (
        <Link to={`view-manga/${manga.slug}`}>
        <div className="w-full md:w-1/2 md:place-self-center lg:ml-auto mr-auto lg:w-1/3 shadow-xl flex flex-col gap-10 justify-center h-40 relative items-center text-center bg-cover mb-10" style={{ backgroundImage: `url('${manga.coverImage}')`, backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
            <div className="w-full shadow-xl h-full absolute z-10 bg-dark-primary opacity-65"></div>
            <h2 className="card-title w-full text-center text-2xl ml-6 mr-6 line-clamp-2 z-20 items-center justify-center text-light-primary">{manga.title}</h2>
            <div className="card-actions">
                {
                    selectedChapter && selectedChapter.comicSlug && selectedChapter.comicSlug === manga.slug ?
                    <Link to={`view-manga/${manga.slug}/${scrollPosition.chapterID}`} className="btn bg-light-primary text-light-secondary z-20 text-lg" state={{ previousPage: "Home" }}>Continue Reading</Link>
                    :
                    <Link to={`view-manga/${manga.slug}`} className="btn bg-light-primary text-light-secondary z-20 text-lg" state={{ previousPage: "Home" }}>Continue</Link>
                }
            </div>
        </div>
        </Link>
    )
}

export default ContinueReading
