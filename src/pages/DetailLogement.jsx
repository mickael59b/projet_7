import Footer from "../composants/Footer";
import Header from "../composants/Header";
import slide1 from "../assets/images/slide_1.jpg";

function DetailLogement() {
    return (
        <div className="main-container">
            <Header />
            <div id="banner">
                <div className="slide active">
                    <div className="banner-img">
                        <img src={slide1} alt="Banner Print-it" />
                    </div>
                </div>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot dot_selected"></div>
                    <div className="dot"></div>
                </div>
                <div id="left" className="arrow arrow_left">&lt;</div>
                <div id="right" className="arrow arrow_right">&gt;</div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailLogement;

