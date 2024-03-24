import HomeCarousel from "./HomeCarousel"
import NameAndLogo from "./NameAndLogo"
import Trending from "./Trending"

const Home = () => {
    return (
        <div className="flex flex-col h-full bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary">
            <NameAndLogo />
            <Trending />
            <HomeCarousel category="new" />
            <HomeCarousel category="popular" />
            <HomeCarousel category="rank" />
        </div>
    )
}

export default Home