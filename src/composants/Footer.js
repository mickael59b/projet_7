import logo from '../assets/images/logo-footer.png'; // Assurez-vous que le chemin est correct
function Footer() {
    return (
        <footer>
            <div className='logo_footer'><img src={logo} alt='Logo de bas de page' /></div>
            <div className='text_copyright'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    );
}

export default Footer;