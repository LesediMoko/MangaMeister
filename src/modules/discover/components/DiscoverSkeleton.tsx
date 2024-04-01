import BottomNav from "../../common/components/BottomNav"

const DiscoverSkeleton = () => {
    return (
        <div className="animate pulse flex flex-col bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary gap-4 min-h-screen max-h-full overflow-y-scroll">
            <h1 className="place-self-center text-3xl mt-4">Discover</h1>
            <div className="flex flex-col dropdown">
                <input
                    type="text"
                    placeholder="Type here"
                    className="place-self-center input input-bordered w-full max-w-xs"


                />
            </div>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked={false} />
                    <div className="collapse-title text-xl font-medium">
                        Genres
                    </div>
                    <div className="collapse-content">

                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked={false} />
                    <div className="collapse-title text-xl font-medium">
                        Status
                    </div>
                    <div className="collapse-content grid grid-cols-2 grid-rows-2 gap-5">

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 ">
                <p className="place-self-center text-2xl mt-4">
                    Results
                </p>
                <div className="w-fit h-fit place-self-center">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="enter title..." id="searchInput" maxLength={70} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>

                <div className="flex flex-row flex-wrap w-full gap-2 justify-evenly">

                    <a className="w-[30%]">
                        <div className="card  rounded-none gap-1">
                            <figure className="h-56 w-full "><div className="w-full h-56 image-full object-cover" /></figure>
                            <div className="card-body p-0">
                                <h2 className="card-title text-xs text-slate-50 line-clamp-2"></h2>
                            </div>
                        </div>
                    </a>

                </div>

                <div className={`join place-self-center mt-5 flex flex-row flex-wrap justify-center gap-4 `}>
                    <button className={`join-item btn 'btn-active' : ''}`}>1</button>
                </div>
            </div>

            <BottomNav activePage="Discover" />
        </div>
    )
}

export default DiscoverSkeleton