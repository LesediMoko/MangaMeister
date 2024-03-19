import { useQuery } from "@tanstack/react-query"
import ChapterNavBar from "./ChapterNavBar"
import Pages from "./Pages"
import { useParams } from "react-router"
import { fetchChapterInfo } from "../../common/services/api-service"
import useMangaStore from "../../common/stores/store"

const Chapter = () => {


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


                <div className="flex flex-col gap-4">
                    <ChapterNavBar chapterName={useMangaStore.getState().selectedChapter!.title} chapterNumber={useMangaStore.getState().selectedChapter!.chapterNumber} mangaName={useMangaStore.getState().selectedManga!.title} />
                    <h1 className="place-self-center text-2xl">{useMangaStore.getState().selectedManga!.title}</h1>
                    <h2 className="place-self-center mb-12">{useMangaStore.getState().selectedChapter?.chapterNumber}. {useMangaStore.getState().selectedChapter!.title}</h2>
                    <Pages pages={useMangaStore.getState().selectedChapter!.pages!} />
                </div>
            )
        }
    }
}

export default Chapter