import logo from '../assets/images/logo.png'; // Assurez-vous que le chemin est correct

function Header() {
    return (
            <header>
                <div className="logo">
                    <img src={logo} alt="Logo" /> {/* Corrigé : le src et le alt sont maintenant correctement utilisés */}
                </div>
                <nav>
                    <ul className='menu'>
                        <li><a href="/">Accueil</a></li> {/* Ajouté : liens pour navigation */}
                        <li><a href="/about">A Propos</a></li>
                    </ul>
                </nav>
            </header>
    );
}

export default Header;