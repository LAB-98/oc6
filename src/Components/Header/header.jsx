// Imports
import './Header.scss'
import Logo from '../../assets/logo.png'
import NavBar from '../NavBar/NavBar'

// Component
export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<NavBar />
		</header>
	)
}