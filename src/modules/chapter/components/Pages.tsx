import useMangaStore from "../../common/stores/store";
import { IPagesProps } from "../../common/types/app-types";
import { useEffect } from "react";

const Pages = ({ pages, chapterID }: IPagesProps) => {
    const scrollPosition = useMangaStore(state => state.scrollPosition);
    window.scrollTo(0, scrollPosition.position);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            useMangaStore.setState({ scrollPosition: { chapterID: chapterID, position: currentPosition } });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [useMangaStore.getState().scrollPosition, chapterID]);

    const baseImageUrl = useMangaStore.getState().imageUrlPrefix
    console.log(useMangaStore.getState().scrollPosition)
    return (

        <div className="overflow-y-scroll flex flex-col place-self-center md:w-1/2 md:mr-[25%] md:ml-[25%]">
            {pages.reverse().map((page) => { return (<img key={page.b2key} src={`${baseImageUrl}/${page.b2key}`} className={`w-full h-[${page.h}px]`}></img>) })}
            <h2>The End!</h2>
        </div>
    )

}

export default Pages