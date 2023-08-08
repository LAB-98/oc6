import { useEffect, useState } from 'react';
import BannerImage from '../../assets/home_cover.png';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './Home.scss'

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

	return (
		<main className='Home'>
			<div>
				<Banner
					image={BannerImage}
					content={<span>Chez vous, <br/>partout et ailleurs</span>}
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