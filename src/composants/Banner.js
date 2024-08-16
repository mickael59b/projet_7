function Banner({ backgroundImage, text }) {
    return (
        <div className="banner">
            <img src={backgroundImage} alt="Banner background" className="banner-img" />
            <h1 className="banner-text">{text}</h1>
        </div>
    );
}
export default Banner;