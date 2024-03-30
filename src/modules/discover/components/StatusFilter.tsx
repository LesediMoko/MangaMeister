import useMangaStore from "../../common/stores/store"

const StatusFilter = () => {
    const submitStatusHandler = (status: number) => {
        useMangaStore.setState({ selectedStatus: status })
        useMangaStore.setState({ selectedFilterType: "status" })


    }
    return (
        <>
            <button className="btn btn-lg sm:btn-sm md:btn-md lg:btn-lg" onClick={() => submitStatusHandler(1)}>1. Ongoing</button>
            <button className="btn btn-lg sm:btn-sm md:btn-md lg:btn-lg" onClick={() => submitStatusHandler(2)}>2. Completed</button>
            <button className="btn btn-lg sm:btn-sm md:btn-md lg:btn-lg" onClick={() => submitStatusHandler(3)}>3. Cancelled</button>
            <button className="btn btn-lg sm:btn-sm md:btn-md lg:btn-lg" onClick={() => submitStatusHandler(4)}>4. Hiatus</button>
        </>

    )
}

export default StatusFilter