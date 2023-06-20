import './lodging.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Offers from '../../offers/offers'
import Header from "../../components/header/header";
//import Slider from "../../components/carousel/carousel"
import Footer from "../../components/footer/footer";
//import Collapse from '../../components/collapse';
//import greyStar from '../../assets/grey_star.png';
//import redStar from '../../assets/red_star.png';

// Accomodation Component displays details about a specific accommodation
export default function Lodging() {
	// State variables
	const [currentLodging, setCurrentLodging] = useState(null);
	// Accessing id from url parameters
	const { id } = useParams();
	
	// UseEffect to fetch accommodation data when id changes
	useEffect(() => {
		const lodgingcard = Offers.find(data => data.id === id);
		setCurrentLodging(lodgingcard);
	}, [id]);

	if (!currentLodging) {
		// render null or a loading spinner while the accommodation data is being fetched
		return null;
	}

	// Extracting name and rating from the current accommodation #####to-do
	//const name = currentAccomodation.host.name.split(' '); 
	//const rating = currentAccomodation.rating;

	return (
		<>
			<Header/>
			<main className="accomodation">
				{/* Rest of your code...*/}
			</main>
			<Footer/>
		</>
	)
}

//below Header <Slider imageSlider={currentLodging.pictures}/>//