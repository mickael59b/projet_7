import Banner from "../composants/Banner";
import Footer from "../composants/Footer";
import Header from "../composants/Header";
import fond from "../assets/images/kalen-emsley.png";
import Dropdown from "../composants/Dropdown";

function About() {
    return (
        <div className="main-container">
            <Header />
            <main>
                <Banner backgroundImage={fond}/>
                <div className="drop_valeurs">
                    <Dropdown title="Fiabilite">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </Dropdown>
                    <Dropdown title="Respect">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..</p>
                    </Dropdown>
                    <Dropdown title="Service">
                        <p>La qualite du service est au coeur de notre engagement chez kasa.Nous veillons a ce que chaque interaction,que ce soit avec nos hôtes ou nos locataires,soit empreinte de respect et de bienveillance.</p>
                    </Dropdown>
                    <Dropdown title="Securite">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Dropdown>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;