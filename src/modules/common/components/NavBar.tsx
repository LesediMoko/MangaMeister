import { Link, useLocation, useNavigate } from "react-router-dom"
import { CgScrollH, CgScrollV } from "react-icons/cg";
import useMangaStore from "../stores/store";

const NavBar = ({ previousPage} : { previousPage: string, onOrientationClick? : (orientation : string | undefined)=> void}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const orientationValue = useMangaStore(state => state.orientation)
    const handleOrientationChange = () => {
        console.log("orientation clicked")
        console.log(`old orientation value: ${orientationValue}`)
        if(orientationValue === "vertical"){
            useMangaStore.setState({orientation: "horizontal"})
        }else{
            useMangaStore.setState({orientation: "vertical"})
        }
        console.log(`new orientation value: ${orientationValue}`)
    }
    return (
        <div className="navbar  w-full place-self-center fixed z-20 top-0 bg-light-primary dark:bg-dark-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {!(previousPage == "Home") && <li><a onClick={() => navigate(-1)}>Back to {previousPage}</a></li>}
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">MangaMeister</a>
            </div>
            <div className="navbar-end">
                {location.pathname.match(/view-manga\/[^\\/]+\/[^\\/]+/) ? 
                orientationValue === "vertical" ?
                <CgScrollV className="h-8 w-8 opacity-65 rounded-full" onClick={handleOrientationChange}/> :
                <CgScrollH className="h-8 w-8 opacity-65 rounded-full" onClick={handleOrientationChange}/> :
                <img src="/icon.webp" alt="icon" className="h-8 w-8 opacity-65 rounded-full" />
                }
            </div>
        </div>
    )
}

export default NavBar