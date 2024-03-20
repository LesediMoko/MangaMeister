import { useQuery } from "@tanstack/react-query"
import ChapterNavBar from "./ChapterNavBar"
import Pages from "./Pages"
import { useParams } from "react-router"
import { fetchChapterInfo } from "../../common/services/api-service"
import useMangaStore from "../../common/stores/store"
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const Chapter = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const pagesRef = useRef(null)
    const { chapterHID } = useParams()
    const { isPending: isPendingChapterInfo, error: errorChapterInfo, data: chapterInfo } = useQuery({
        queryKey: ['fetchChapterPages', chapterHID ?? ''],
        queryFn: () => fetchChapterInfo(chapterHID ?? ''),
        enabled: !!chapterHID
    })
    const allChapters = useMangaStore.getState().chapters

    if (errorChapterInfo)
        return "Error"

    if (isPendingChapterInfo)
        return "Loading Pages"

    if (chapterInfo) {
        const chapterPages = chapterInfo.chapter.md_images;
        const oldChapterState = allChapters.find((chapter) => chapter.hid === chapterHID) || null;
        if (oldChapterState) {
            oldChapterState.pages = chapterPages
            useMangaStore.setState({ selectedChapter: oldChapterState })
            return (
                useMangaStore.getState().selectedChapter &&
                <>
                    <motion.div initial="hidden" whileInView="visible" style={{ scaleX }} className="fixed top-0 left-0 right-0 bg-rose-400 origin-left h-2 z-10" viewport={{ root: pagesRef }} />
                    <div className="flex flex-col gap-4" ref={pagesRef}>
                        <ChapterNavBar chapterName={useMangaStore.getState().selectedChapter!.title} chapterNumber={useMangaStore.getState().selectedChapter!.chapterNumber} mangaName={useMangaStore.getState().selectedManga!.title} />
                        <h1 className="place-self-center text-2xl">{useMangaStore.getState().selectedManga!.title}</h1>
                        <div className="=flex flex-col place-content-center text-center">
                            <h2 className="place-self-center mb-12">{useMangaStore.getState().selectedChapter?.chapterNumber}. {useMangaStore.getState().selectedChapter!.title}</h2>
                            <Pages pages={useMangaStore.getState().selectedChapter!.pages!} />
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Chapter