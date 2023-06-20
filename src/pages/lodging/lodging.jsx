import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Offers from '../../offers/offers'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
//import Collapse from '../../components/collapse';
//import greyStar from '../../assets/grey_star.png';
//import redStar from '../../assets/red_star.png';

// Accomodation Component displays details about a specific accommodation
export default function Accomodation() {
	// State variables
	const [currentAccomodation, setCurrentAccomodation] = useState(null);
	// Accessing id from url parameters
	const { id } = useParams();
	
	// UseEffect to fetch accommodation data when id changes
	useEffect(() => {
		const accomodation = Offers.find(data => data.id === id);
		setCurrentAccomodation(accomodation);
	}, [id]);

	if (!currentAccomodation) {
		// render null or a loading spinner while the accommodation data is being fetched
		return null;
	}

	// Extracting name and rating from the current accommodation
	const name = currentAccomodation.host.name.split(' '); 
	const rating = currentAccomodation.rating;

	return (
		<>
			<Header/>
			<Slider imageSlider={currentAccomodation.pictures}/>
			<main className="accomodation">
				{/* Rest of your code...*/}
			</main>
			<Footer/>
		</>
	)
}
