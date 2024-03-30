import { Link } from "react-router-dom"
import { ISelectedManga } from "../../common/types/app-types"

const ContinueReading = ({ manga, scrollPosition }: { manga: ISelectedManga, scrollPosition: { chapterID: string, position: number } }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 shadow-xl flex flex-col gap-10 justify-center h-40 relative items-center text-center bg-cover mb-10" style={{ backgroundImage: `url('${manga.coverImage}')`, backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
            <div className="w-full shadow-xl h-full absolute z-10 bg-dark-primary opacity-65"></div>
            <h2 className="card-title w-full text-center text-2xl ml-6 mr-6 line-clamp-2 z-20 items-center justify-center text-light-primary">{manga.title}</h2>
            <div className="card-actions">
                <Link to={`view-manga/${manga.slug}/${scrollPosition.chapterID}`} className="btn bg-light-primary text-light-secondary z-20 text-lg" state={{ previousPage: "Home" }}>Continue Reading</Link>
            </div>
        </div>
    )
}

export default ContinueReading
