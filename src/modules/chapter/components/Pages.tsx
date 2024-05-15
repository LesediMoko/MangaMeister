import React from "react";
import useMangaStore from "../../common/stores/store";
import { IPagesProps } from "../../common/types/app-types";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const Pages = ({ pages, chapterID, nextChapter, prevChapter }: IPagesProps) => {
    const scrollPosition = useMangaStore(state => state.scrollPosition);
    window.scrollTo(0, scrollPosition.position);
    const {selectedSlug} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            useMangaStore.setState({ scrollPosition: { chapterID: chapterID, position: currentPosition } });
            window.scrollTo(0, scrollPosition.position)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [useMangaStore.getState().scrollPosition, chapterID]);

    const goToNextChapter = () => {
        navigate(`/view-manga/${selectedSlug}/${nextChapter?.hid}`)
    }

    const goToPrevChapter = () => {
        navigate(`/view-manga/${selectedSlug}/${prevChapter?.hid}`)
    }

    const baseImageUrl = useMangaStore.getState().imageUrlPrefix

    return (

        <div className="overflow-y-scroll flex flex-col place-self-center md:w-1/2 md:mr-[25%] md:ml-[25%]">
            {pages.reverse().map((page) => { return (<img loading="lazy" key={page.b2key} src={`${baseImageUrl}/${page.b2key}`} className={`w-full h-[${page.h}px]`}></img>) })}
            <div className="h-svh flex flex-col text-4xl justify-around">
                <p className="place-self-center">fin.</p>
                <div className="flex flex-row  justify-around ">
                    <button className="btn btn-outline" disabled={prevChapter == null} onClick={goToPrevChapter}>Previous</button>
                    <button className="btn btn-outline" disabled={nextChapter == null} onClick={goToNextChapter}>Next</button>
                </div>
            </div>
        </div>
    )

}

export default Pages