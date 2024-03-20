const NameAndLogo = () => {
    return (
        <div className="flex flex-row h-24 place-self-center">
            <img src="/logo.webp" alt="App Logo" className="object-cover w-24 justify-around" />
            <strong className="text-slate-100 place-self-center text-2xl">MangaMeister</strong>

        </div>
    )

}

export default NameAndLogo