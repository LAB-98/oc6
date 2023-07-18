import './Home.scss'
import Banner from '../../components/Banner/Banner';
import Lodging from '../../components/Lodging/Lodging';
import BannerImage from '../../assets/home_cover.png';
import React, { useState, useEffect } from "react"

// Component
export default function Home() {

	const [lodgings, setLodgings] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/lodging.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
		})
		.then(function(json){
			setLodgings(json);
		})
		.catch(function(err){
			console.log(err)
		})
	}, []);

	return(
		<div className='Home'>
			<Banner
				image={BannerImage}
				content="Chez vous, partout et ailleurs"
			/>
			{ lodgings && lodgings.length > 0 && lodgings.map((item) =>
				<Lodging
					id={item.id}
					title={item.title}
					cover={item.cover}
				/>
			)}
		</div>
	);
}