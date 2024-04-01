import { useState } from "react";
import GenreFilter from "./GenreFilter";
import StatusFilter from "./StatusFilter";

const OptionAccordion = () => {
    const [isCheckedGenre, setIsCheckedGenre] = useState(false);
    const handleCheckboxChangeGenre = () => {
        setIsCheckedGenre(!isCheckedGenre);
        setIsCheckedStatus(false);
    };
    const [isCheckedStatus, setIsCheckedStatus] = useState(false);
    const handleCheckboxChangeStatus = () => {
        setIsCheckedStatus(!isCheckedStatus);
        setIsCheckedGenre(false);
    };


    return (
        <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" checked={isCheckedGenre} onClick={handleCheckboxChangeGenre} />
                <div className="collapse-title text-xl font-medium">
                    Genres
                </div>
                <div className="collapse-content">
                    <GenreFilter />
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" checked={isCheckedStatus} onClick={handleCheckboxChangeStatus} />
                <div className="collapse-title text-xl font-medium">
                    Status
                </div>
                <div className="collapse-content grid grid-cols-2 grid-rows-2 gap-5">
                    <StatusFilter />
                </div>
            </div>
        </div>
    )

}

export default OptionAccordion