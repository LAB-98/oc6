// Imports
import './Footer.scss';
import logo from '../../assets/logo_footer.png';

// Component
export default function Footer() {
	return(
		<footer className='footer'>
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2023 Kasa. Tous droits réservés</p>
		</footer>
	);
}