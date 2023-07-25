import { useEffect, useState } from 'react';
import BannerImage from '../../assets/home_cover.png';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './Home.scss'
import { useMediaQuery } from 'react-responsive';

// Component
export default function Home() {

	const [lodgings, setLodgings] = useState([]);

	useEffect(() => {
		fetch(`/lodging.json`)
		.then((response) => response.json())
		.then((json) => {
			setLodgings(json);
		})
		.catch((error) => console.log(error));
	}, []);

	const isMobileDevice = useMediaQuery({
		query: '(max-device-width: 374px)'
	});

	return (
		<main className='Home'>
			<div>
				<Banner
					image={BannerImage}
					content={isMobileDevice ? 
						(<><span style={{textAlign: 'left'}}>Chez vous,</span><br /><span style={{textAlign: 'left'}}>partout et ailleurs</span></>) 
						: "Chez vous, partout et ailleurs"
					}
				/>
				<div className="home_gallery">
					{lodgings && lodgings.length > 0 && lodgings.map((data, index) => (
						<Card
							key={data.id}
							id={data.id}
							title={data.title}
							cover={data.cover}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
