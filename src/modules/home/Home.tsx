import NameAndLogo from "./NameAndLogo"
import Trending from "./Trending"

const Home = () => {
    return (
        <div className="flex flex-col h-svh bg-black">
            <Trending />
            <NameAndLogo />
        </div>
    )
}

export default Home