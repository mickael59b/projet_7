import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../composants/Header';
import Footer from '../composants/Footer';
import NotFound from './NotFound';
import Dropdown from '../composants/Dropdown';
import ImageSlider from '../composants/ImageSlider';
import HostInfo from '../composants/HostInfo';
import Ratings from '../composants/Ratings';

function Detail() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [currentPicture, setCurrentPicture] = useState(null);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch('/logements.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const logementDetail = data.find(item => item.id === id);
                if (logementDetail) {
                    setLogement(logementDetail);
                    setCurrentPicture(logementDetail.pictures[0]);
                }
            } catch (error) {
                console.error('Error fetching the logement detail:', error);
            }
        };

        fetchLogement();
    }, [id]);

    if (!logement) return <NotFound />;

    const { title, pictures, description, equipments, location, host, tags, rating } = logement;

    const handlePrev = () => {
        const currentIndex = pictures.indexOf(currentPicture);
        const prevIndex = (currentIndex === 0) ? pictures.length - 1 : currentIndex - 1;
        setCurrentPicture(pictures[prevIndex]);
    };

    const handleNext = () => {
        const currentIndex = pictures.indexOf(currentPicture);
        const nextIndex = (currentIndex === pictures.length - 1) ? 0 : currentIndex + 1;
        setCurrentPicture(pictures[nextIndex]);
    };

    return (
        <div className="main-container">
            <Header />
            <main>
                <div className='details'>
                    <ImageSlider
                        pictures={pictures}
                        currentPicture={currentPicture}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                    />
                    <div className='infos_container'>
                        <div className='infos'>
                            <h1>{title}</h1>
                            <p>{location}</p>
                            <div className='tags'>
                                {tags && tags.length > 0 && tags.map((tag, index) => (
                                    <span key={index} className='tag'>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className='infos_avatar'>
                            <HostInfo host={host} />
                            <Ratings rating={rating} />
                        </div>
                    </div>
                    <div className='infos_collapse'>
                        <Dropdown title="Description">
                            <p>{description}</p>
                        </Dropdown>
                        <Dropdown title="Équipements">
                            <ul>
                                {equipments && equipments.map((equipement, index) => (
                                    <li key={index}>{equipement}</li>
                                ))}
                            </ul>
                        </Dropdown>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Detail;
