import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about-us/about-us';
import Lodging from './pages/lodging/lodging';
import Err404 from './pages/err404/err404';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/Kasa" element={<Home />} />
				<Route path="/accomodation/:id" element={<Lodging />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Err404 />} />
				
			</Routes>
		</Router>
	);
}

export default App;
