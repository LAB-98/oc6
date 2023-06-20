import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about-us/about-us';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/Kasa" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
