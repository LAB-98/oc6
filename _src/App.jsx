import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Lodging from './pages/Lodging/Lodging';
import Err404 from './pages/Err404/Err404';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lodging/:id" element={<Lodging />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="*" element={<Err404 />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
