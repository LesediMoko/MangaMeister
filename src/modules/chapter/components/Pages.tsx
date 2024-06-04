import useMangaStore from "../../common/stores/store";
import { IPagesProps } from "../../common/types/app-types";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams,  } from "react-router";

const Pages = ({ pages, chapterID, nextChapter, prevChapter }: IPagesProps) => {
    const scrollPosition = useMangaStore(state => state.scrollPosition);
    const scrollPositionHorizontal = useMangaStore(state => state.scrollPositionHorizontal);
    const {selectedSlug} = useParams()
    const navigate = useNavigate()
    const readOrientation = useMangaStore(state => state.orientation)
   
    const [currentPage, setCurrentPage] = useState(1);
    const carouselRef = useRef<HTMLDivElement>(null);

  const handleScrollHorizontal = () => {
    if (readOrientation === "horizontal" && carouselRef.current) {
        const carousel = carouselRef.current;
        const carouselItems = Array.from(carousel.children)
        const scrollLeft = carousel.scrollLeft;
        const clientWidth = carousel.clientWidth;


        const newIndex = carouselItems.findIndex((item) => {
            const itemLeft = (item as HTMLElement).offsetLeft;
            const itemRight = itemLeft + (item as HTMLElement).offsetWidth;
            useMangaStore.setState({ scrollPositionHorizontal: { chapterID: chapterID, offsetLeft: itemLeft, offsetWidth: itemRight } });
            return scrollLeft + clientWidth / 2 >= itemLeft && scrollLeft + clientWidth / 2 <= itemRight;
        });

        setCurrentPage(newIndex + 1);
    }
  };
    
    useEffect(() => {
        if (readOrientation === "vertical"){
            window.scrollTo(0, scrollPosition.position);
            if (scrollPosition.chapterID !== chapterID) {
                useMangaStore.setState({ scrollPosition: { chapterID: chapterID, position: 0 } });
            }
        }
        if (readOrientation === "horizontal") {
            if (scrollPositionHorizontal.chapterID === chapterID) {
                if (carouselRef.current) {
                    const carousel = carouselRef.current;
                    carousel.scrollLeft = scrollPositionHorizontal.offsetLeft;
                }
            }
        }
    }, [])

    useEffect(() => {
        if (readOrientation === "horizontal" && carouselRef.current) {
          const carousel = carouselRef.current;
          carousel.addEventListener('scroll', handleScrollHorizontal);
    
          return () => {
            carousel.removeEventListener('scroll', handleScrollHorizontal);
          };
        }
      }, [readOrientation, currentPage]);
    

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentPosition = window.scrollY;
    //         useMangaStore.setState({ scrollPosition: { chapterID: chapterID, position: currentPosition } });
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [useMangaStore.getState().scrollPosition.position, chapterID]);
    const handleScroll = () => {
        console.log("scrolling")
        const currentPosition = window.scrollY;
        useMangaStore.setState({ scrollPosition: { chapterID: chapterID, position: currentPosition } });
    };
    

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
    
            
    
            return () => {
                window.addEventListener("scroll", handleScroll);
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    const goToNextChapter = () => {
        navigate(`/view-manga/${selectedSlug}/${nextChapter?.hid}`)
    }

    const goToPrevChapter = () => {
        navigate(`/view-manga/${selectedSlug}/${prevChapter?.hid}`)
    }

    const baseImageUrl = useMangaStore.getState().imageUrlPrefix

    return (
        <>
        {readOrientation == "horizontal" && <progress className="w-full top-14 left-0  fixed z-30" color="black" value={currentPage} max={pages.length}></progress>}
        <div className={`overflow-y-scroll flex ${readOrientation == "vertical" ? "flex-col place-self-center md:w-1/2 md:mr-[25%] md:ml-[25%]" : "flex-row place-self-center carousel carousel-start" }`} ref={carouselRef}>
            {pages.reverse().map((page) => { return (<img loading="lazy" key={page.b2key} src={`${baseImageUrl}/${page.b2key}`} className={`w-full h-[${page.h}px] ${readOrientation == "horizontal" && "carousel-item object-fill"}`}></img>) })}
            <div className={`h-svh flex flex-col text-4xl justify-around ${readOrientation == "horizontal" && "w-full carousel-item"}`}>
                <p className="place-self-center">fin.</p>
                <div className="flex flex-row  justify-around ">
                    <button className="btn btn-outline" disabled={prevChapter == null} onClick={goToPrevChapter}>Previous</button>
                    <button className="btn btn-outline" disabled={nextChapter == null} onClick={goToNextChapter}>Next</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default Pages