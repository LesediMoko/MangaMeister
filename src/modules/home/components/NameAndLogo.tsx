const NameAndLogo = () => {
    return (
        <div className="flex flex-row h-20 place-self-center mb-4 mt-4">
            <div className="bg-logo-light dark:bg-logo-dark w-24 justify-around bg-center bg-cover border-4 border-light-primary dark:border-dark-primary"></div>
            <strong className="text-slate-100 place-self-center text-3xl">MangaMeister</strong>

        </div>
    )
}

export default NameAndLogo