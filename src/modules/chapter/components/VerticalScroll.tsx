import { motion, useScroll, useSpring } from "framer-motion"
import { useParams } from "react-router"
import useMangaStore from "../../common/stores/store"
import { useEffect } from "react";
const VerticalScroll = () => {
    const { scrollYProgress } = useScroll();
    const { scrollXProgress } = useScroll();
    const { chapterHID } = useParams()
    const readOrientation = useMangaStore((state) => state.orientation)
    const scaleX = useSpring(readOrientation ? scrollYProgress : scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleScroll = () => {
        console.log("scrolling")
        const currentPosition = window.scrollY;
        useMangaStore.setState({ scrollPosition: { chapterID: chapterHID ?? "", position: currentPosition } });
    };
    

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
    
            
    
            return () => {
                window.addEventListener("scroll", handleScroll);
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);
    return (
        <motion.div initial="hidden" whileInView="visible" style={{scaleX}} className="fixed top-16 left-0 right-0 bg-light-secondary dark:bg-dark-primary origin-left h-2 z-10" />
    )
}

export default VerticalScroll;