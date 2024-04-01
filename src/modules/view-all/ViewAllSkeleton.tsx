import NavBar from "../common/components/NavBar";

const ViewAllSkeleton = () => {
    return (
        <div className="animate-pulse bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary min-h-screen max-h-full flex flex-col gap-4">
            <NavBar previousPage="Home" />
            <p className="place-self-center text-2xl mt-20">

            </p>
            <div className="w-fit h-fit place-self-center mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="enter title..." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className="flex flex-row flex-wrap w-full gap-2 justify-evenly">
                <a className="w-[30%] mb-4">
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
            <div className="w-full mt-10"></div>
        </div>
    )
}

export default ViewAllSkeleton;
