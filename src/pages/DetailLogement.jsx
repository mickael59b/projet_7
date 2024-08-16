import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Left from '../assets/images/arrow_left.png';
import Right from '../assets/images/arrow_right.png';
import StarActive from '../assets/images/star-active 1.png';
import StarInactive from '../assets/images/star-inactive 1.png';
import Header from '../composants/Header';
import Footer from '../composants/Footer';
import NotFound from './NotFound';
import Dropdown from '../composants/Dropdown';

function Detail() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [currentPicture, setCurrentPicture] = useState(null);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch('/logements.json'); // Path to your JSON file
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const logementDetail = data.find(item => item.id === id);
                if (logementDetail) {
                    setLogement(logementDetail);
                    setCurrentPicture(logementDetail.pictures[0]); // Set the first picture as current
                }
            } catch (error) {
                console.error('Error fetching the logement detail:', error);
            }
        };

        fetchLogement();
    }, [id]);

    if (!logement) return <NotFound />;

    const { title, pictures, description , equipments , location, host, tags, rating } = logement;

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

    const starCount = 5; // Number of stars to display

    return (
        <div className="main-container">
            <Header />
            <main>
                <div className='details'>
                    <div id="banner">
                        <div className="slide">
                            <div className="slider-img">
                                <img src={currentPicture} alt={`Slide`} />
                            </div>
                        </div>
                        <div className="slide-indicator">
                            {pictures.indexOf(currentPicture) + 1} / {pictures.length}
                        </div>
                        {pictures.length > 1 && (
                            <>
                                <div id="left" className="arrow arrow_left" onClick={handlePrev}>
                                    <img src={Left} alt="left" />
                                </div>
                                <div id="right" className="arrow arrow_right" onClick={handleNext}>
                                    <img src={Right} alt="right" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className='infos_container'>
                        <div className='infos'>
                            <h1>{title}</h1>
                            <p>{location}</p>
                            <div className='tags'>
                                {tags && tags.length > 0 && tags.map((tag, index) => (
                                    <span key={index} className='tag'>{tag}</span> // Adjust if `tag` is an object
                                ))}
                            </div>
                        </div>
                        <div className='host'>
                            <div className='infos_prop'>
                                <div className='title_name'>{host?.name}</div>
                                <div className='avatar'>
                                    {host?.picture && <img src={host.picture} alt={host.name} />}
                                </div>
                            </div>
                            <div className='ratings'>
                                {[...Array(starCount)].map((_, index) => (
                                    <img 
                                        key={index}
                                        src={index < rating ? StarActive : StarInactive}
                                        alt={`Star ${index + 1}`}
                                        className='star'
                                    />
                                ))}
                            </div>
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




