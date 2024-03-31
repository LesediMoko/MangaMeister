const Pagination = ({ totalMangas, mangasPerPage, setCurrentPage, currentPage }: { totalMangas: number, mangasPerPage: number, currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>> }) => {
    const pages = []

    for (let pageNumber = 1; pageNumber <= Math.ceil(totalMangas / mangasPerPage); pageNumber++) {
        pages.push(pageNumber)
    }
    return (
        <div className={`join place-self-center mb-4 flex flex-row flex-wrap justify-center gap-4 `}>
            {pages.map((page, ind) => (<button onClick={() => setCurrentPage(page)} key={ind} className={`join-item btn ${currentPage === page ? 'btn-active' : ''}`}>{page}</button>))}
        </div>

    )
}

export default Pagination