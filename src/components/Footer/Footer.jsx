// Imports
import './Footer.scss';
import logo from '../../assets/logo_footer.png';

// Component
export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
            <p className='footer_copyright'><span>© 2020 Kasa. All</span><span> rights reserved</span></p>
        </footer>
    );
}
