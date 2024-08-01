import Header from '../composants/Header';
import Footer from '../composants/Footer';
import imgbannerhome from '../assets/images/banner-home.jpg';

function Home() {
    return (
        <div className='main-container'>
            <Header />
            <section className='banner'>
                <img src={imgbannerhome} alt="Banner Home" />
                <p>Chez vous, partout et ailleurs</p>
            </section>
            <section className='galery'>
                <div className='thumb'>
                    <a href="./detail/">
                        <img src='path/to/image1.jpg' alt='' />
                        <h3>Titre de la location 1</h3>
                    </a>
                </div>
                <div className='thumb'>
                    <a href="./detail/">
                        <img src='path/to/image2.jpg' alt='' />
                        <h3>Titre de la location 2</h3>
                    </a>
                </div>
                <div className='thumb'>
                    <a href="./detail/">
                        <img src='path/to/image3.jpg' alt='' />
                        <h3>Titre de la location 3</h3>
                    </a>
                </div>
                <div className='thumb'>
                    <a href="./detail/">
                        <img src='path/to/image4.jpg' alt='' />
                        <h3>Titre de la location 4</h3>
                    </a>
                </div>
                <div className='thumb'>
                    <a href="./detail/">
                        <img src='path/to/image5.jpg' alt='' />
                        <h3>Titre de la location 5</h3>
                    </a>
                </div>
                <div className='thumb'>
                    <a href="./detail/">
                        <img src='path/to/image6.jpg' alt='' />
                        <h3>Titre de la location 6</h3>
                    </a>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;

