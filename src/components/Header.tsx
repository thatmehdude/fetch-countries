const Header = () => {
    return (
        <>
        <header>
            <a href="/">Where in the world?</a>
            <div className="theme-toggle">
                <div className="img-div">
                    <img src="/moon-svgrepo-com.svg" alt="light" />
                </div>
                <p>Dark Mode</p>
            </div>
        </header>
        </>
    )
}
export default Header