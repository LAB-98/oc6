import './header.scss'
import Logo from '../../assets/logo.png';

// Composant
const Header = () => (
    <header className='header'>
      <h1>
        <img src={Logo} alt="kasa, location d'appartements" />
      </h1>
      <Navbar /> //component à faire
    </header>
  );

  export default Header;