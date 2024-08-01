import Header from "../composants/Header";
import Footer from "../composants/Footer";
function NotFound(){
    return(
        <div className='main-container'>
            <Header />
            <div className="error_container">
                <div className="text_404">404</div>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d’accueil</a>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;