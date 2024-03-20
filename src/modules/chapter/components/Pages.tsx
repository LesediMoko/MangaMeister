import useMangaStore from "../../common/stores/store";
import { IPagesProps } from "../../common/types/app-types";

const Pages = ({ pages }: IPagesProps) => {
    const baseImageUrl = useMangaStore.getState().imageUrlPrefix
    return (

        <div className="overflow-y-scroll flex flex-col place-self-center">
            {pages.reverse().map((page) => { return (<img key={page.b2key} src={`${baseImageUrl}/${page.b2key}`} className={`w-full h-[${page.h}px]`}></img>) })}
            <h2>The End!</h2>
        </div>
    )

}

export default Pages