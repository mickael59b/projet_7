import React, { useState, useEffect } from 'react';
import Header from '../composants/Header';
import Footer from '../composants/Footer';
import imgbannerhome from '../assets/images/banner-home.jpg';
import Banner from '../composants/Banner';
import Card from '../composants/Card';

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

    return (
        <div className='main-container'>
            <Header />
            <main>
                <Banner 
                    backgroundImage={imgbannerhome}
                    text="Chez vous, partout et ailleurs"  />
                <section className='gallery'>
                    {logements.map((logement) => (
                        <Card key={logement.id} id={logement.id} cover={logement.cover} title={logement.title}/>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;

