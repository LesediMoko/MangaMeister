import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div style={{ backgroundImage: "url(/bg-nimbus-3.png)", backgroundPosition: "50% 50%" }} className="m-0 h-svh flex flex-col">
            <p className="text-slate-50 text-6xl place-self-center mt-36">404</p>
            <p className="text-slate-50 text-xl place-self-center mt-10">Whoops, looks like this page took a wrong turn!</p>
            <p className="text-slate-50 text-lg place-self-center mt-96">Let Nimbus take you home!</p>
            <Link to="" className="size-44 place-self-center cursor-pointer mt-16">
            </Link>
        </div>
    )
}

export default ErrorPage