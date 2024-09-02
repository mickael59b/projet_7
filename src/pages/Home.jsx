import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../composants/Header';
import Footer from '../composants/Footer';
import imgbannerhome from '../assets/images/banner-home.jpg';
import Banner from '../composants/Banner';

function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        const fetchLogements = async () => {
            try {
                const response = await fetch('/logements.json'); // Chemin vers le fichier JSON
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLogements(data);
            } catch (error) {
                console.error('Error fetching the logements data:', error);
            }
        };

        fetchLogements();
    }, []);

    // Limiter à 6 logements
    const displayedLogements = logements.slice(0, 12);

    return (
        <div className='main-container'>
            <Header />
            <main>
                <Banner 
                    backgroundImage={imgbannerhome}
                    text="Chez vous, partout et ailleurs"  />
                <section className='gallery'>
                    {displayedLogements.map((logement) => (
                        <div className='thumb' key={logement.id}>
                            <Link to={`/detail/${logement.id}`}>
                                <img src={logement.cover} alt={logement.title} />
                                <h3>{logement.title}</h3>
                            </Link>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
