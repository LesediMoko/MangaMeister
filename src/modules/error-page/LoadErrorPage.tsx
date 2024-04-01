import NavBar from "../common/components/NavBar"

const LoadErrorPage = () => {
    return (
        <div>
            <NavBar previousPage={"Home"} />
            <div className="flex flex-col items-center justify-center h-screen bg-">
                <h1 className="text-3xl font-bold">Oops! Something went wrong</h1>
                <p className="text-lg">Please try again later</p>
                <img src="error-img.svg" alt="error" className="w-1/2 h-1/3" />
            </div>
        </div>
    )

}

export default LoadErrorPage