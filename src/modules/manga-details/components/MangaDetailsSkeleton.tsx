import { HiOutlinePaintBrush } from "react-icons/hi2"
import { MdHistoryEdu } from "react-icons/md"
import NavBar from "../../common/components/NavBar"
import Votes from "./Votes"

const MangaDetailsSkeleton = () => {
    return (
        <div className='bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary min-h-screen max-h-full overflow-y-scroll animate-pulse'>
            <NavBar previousPage={"Home"} />
            <div className="flex flex-col w-full gap-4 pl-4 md:flex-row mt-20 place-self-center bg-neutral-500">
                <div className='h-80 w-3/5 place-self-center p-2 m-4 rounded-xl  md:h-80 md:place-self-start md:w-1/6 bg-neutral-700' />
                <div className='flex flex-col gap-4 pl-4 md:text-left md:flex-col md:justify-center md:place-items-start bg-neutral-500'>
                    <div className="card-title  text-4xl h-4 w-20   bg-neutral-700"></div>
                    <div className='flex flex-row gap-2 mr-4 bg-slate-600'>
                        <MdHistoryEdu />

                        <div className="bg-neutral-700 h-4 w-20 "></div>



                    </div>
                    <div className='flex flex-row gap-2 mr-4'>
                        <HiOutlinePaintBrush />

                        <div className="bg-neutral-700 h-4 w-20 "></div>


                    </div>
                    <p>... Chapters</p>

                    <h5 className='md:hidden'>Description</h5>
                    <div className='pb-8 md:place-content-end mr-4 bg-neutral-700 h-36 w-80  mb-4'></div>
                </div>
            </div>
            <ul className="menu h-80 w-full bg-neutral-700">
                <li className="menu-title">Chapters: </li>


                <li className="p-2">
                    <span>
                        <Votes upVotes={0} />
                    </span>
                </li>

            </ul>
        </div>
    )
}

export default MangaDetailsSkeleton