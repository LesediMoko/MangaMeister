import { MagicMotion } from "react-magic-motion";
import { IRecommendation } from "../../common/types/subtypes";
import ResultListItem from "../../discover/components/ResultListItem";
import useMangaStore from "../../common/stores/store";
import { useState } from "react";

const Recommendations = ({ recommendations, currentPageMangaTitle }: {recommendations : IRecommendation[] | undefined, currentPageMangaTitle : string}) => {
    const [searchText, setSearchText] = useState("");
    if (!recommendations) {
        return null
    }
    const recommendedMangas = recommendations.filter((recommendation) => {
        return recommendation.relates && recommendation.relates.slug && recommendation.relates.md_covers && recommendation.relates.md_covers[0] && recommendation.relates.md_covers[0].b2key
    })
    const recommendedMangasVerified = recommendedMangas.map((item) => (item.relates))
    if (recommendedMangasVerified.length === 0) {
        return (<><input type="radio" name="my_tabs_2" role="tab" className="tab ml-[2.5rem]" aria-label="Recommendations" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="text-lg text-center">No Recommendations Available</div>
        </div> </>)
    }
    return (
        <>
        <input type="radio" name="my_tabs_2" role="tab" className="tab ml-[2.5rem]" aria-label="Recommendations" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="w-fit h-fit mb-10 mt-5">
                <label className="input input-bordered flex items-center gap-2 ml-[20%] w-fit ">
                    <input type="text" className="grow" placeholder="enter title..." id="searchInput" maxLength={70} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
        <MagicMotion>
                    <div className="flex flex-row flex-wrap w-full gap-2 justify-evenly">
                        {recommendedMangasVerified
                            .filter(({ title }) => title
                                .toLowerCase()
                                .trim()
                                .includes(searchText.toLowerCase().trim())
                            )
                            .map((item) => (
                                <ResultListItem key={item.slug} title={item.title} coverImage={useMangaStore.getState().imageUrlPrefix + item.md_covers[0].b2key} slug={item.slug} previousPage={currentPageMangaTitle} />
                            ))}
                    </div>
        </MagicMotion>
        </div>
        </>
    )
}

export default Recommendations;