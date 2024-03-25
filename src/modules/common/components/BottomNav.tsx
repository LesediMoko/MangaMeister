import { GiArchiveResearch } from "react-icons/gi";
import { BiHomeSmile } from "react-icons/bi";

const BottomNav = ({ activePage }: { activePage: string }) => {
    return (
        <div className="btm-nav">
            <button className={activePage == "Home" ? "active" : ""}>
                <BiHomeSmile className="size-5" />
                <span className="btm-nav-label">Home</span>
            </button>
            <button className={activePage == "Discover" ? "active" : ""}>

                <GiArchiveResearch className="size-5" />
                <span className="btm-nav-label">Discover</span>
            </button>
        </div>
    )
}

export default BottomNav