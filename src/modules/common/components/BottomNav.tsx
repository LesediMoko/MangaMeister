import { GiArchiveResearch } from "react-icons/gi";
import { BiHomeSmile } from "react-icons/bi";
import { Link } from "react-router-dom";

const BottomNav = ({ activePage }: { activePage: string }) => {
    return (
        <div className="btm-nav mb-0">
            <button className={activePage == "Home" ? "active" : ""}>
                <Link to="/" state={{ previousPage: "Home" }} className="flex flex-col items-center">
                    <BiHomeSmile className="size-5" />
                    <span className="btm-nav-label">Home</span>
                </Link>
            </button>
            <button className={activePage == "Discover" ? "active" : ""}>
                <Link to="/discover" state={{ previousPage: "Discover" }} className="flex flex-col items-center">
                    <GiArchiveResearch className="size-5" />
                    <span className="btm-nav-label">Discover</span>
                </Link>
            </button>
        </div>
    )
}

export default BottomNav