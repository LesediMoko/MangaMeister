import BottomNav from "../../common/components/BottomNav"
import useMangaStore from "../../common/stores/store"
import ContinueReading from "./ContinueReading"
import HomeCarousel from "./HomeCarousel"
import NameAndLogo from "./NameAndLogo"
import Trending from "./Trending"


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen max-h-full bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary">
            <NameAndLogo />
            
            {useMangaStore.getState().scrollPosition.chapterID != "" && useMangaStore.getState().selectedManga && <ContinueReading manga={useMangaStore.getState().selectedManga!} scrollPosition={useMangaStore.getState().scrollPosition} selectedChapter={useMangaStore.getState().selectedChapter ?? null}/>}
            <Trending />
            <HomeCarousel category="new" />
            <HomeCarousel category="popular" />
            <HomeCarousel category="rank" />
            <BottomNav activePage="Home" />
        </div>
    )
}

export default Home