function Banner({ backgroundImage, text }) {
    return (
        <div className="banner">
            <img src={backgroundImage} alt="Banner background" className="banner-img" />
            <div className="banner__sombre"></div>
            <h1 className="banner-text">{text}</h1>
        </div>
    );
}
export default Banner;