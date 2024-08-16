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
                    <Dropdown title="fiabilite"/>
                    <Dropdown title="fiabilite"/>
                    <Dropdown title="fiabilite"/>
                    <Dropdown title="fiabilite"/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;