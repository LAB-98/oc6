import './Lodging.scss'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import redStar from '../../assets/red_star.png';
import greyStar from '../../assets/grey_star.png';

export default function Lodging() {
	const { id } = useParams();
	const [currentLodging, setCurrentLodging] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3000/lodging.json")
		.then(function(res){
			if(res.ok){
				return res.json();
			}
			throw new Error('Network response was not ok');
		})
		.then(function(json){
			const match = json.find(data => data.id === id);
			if(match) {
				setCurrentLodging(match);
			}
			else {

			}
		})
		.catch(function(err){
			console.log(err);
		});
	}, [id]);

	return (
		<div className='Lodging'>
			{currentLodging && (
				<div>
					<Gallery
						images={currentLodging.pictures}
					/>
					<div className='Lodging_content'>
						<div className='duobox'>
							<div className='duobox-left'>
								<h1 className='Lodging_content_infos'>{currentLodging.title}</h1>
								<p>{currentLodging.location}</p>
								<div>
									{currentLodging.tags.map((tag, index) => (
										<button className="Lodging_content_infos_tagbutton" key={index}>{tag}</button>
										
									))}
								</div>
							</div>
							<div className='duobox-right'>
								<div className='duobox-mobile-only'>
									<div className='Lodging_content_host'>
										<span className='Lodging_content_host_name'>{currentLodging.host.name}</span>
										<img src={currentLodging.host.picture} alt="host of this lodging" />
									</div>
									<div className='Lodging_content_host_stars'>
										{[...Array(5)].map((star, index) => {
											const ratingValue = index + 1;
											return (
												<img
													key={index}
													src={ratingValue <= currentLodging.rating ? redStar : greyStar}
													alt="star"
												/>
											)
										})}
									</div>
								</div>
							</div>
						</div>
						<div className="Lodging_collapse duobox">
							<div className="Lodging_collapse_item duobox-left">
								<Collapse title="Description" content={currentLodging.description} />
							</div>
							<div className="Lodging_collapse_item duobox-right">
								<Collapse title="Equipments" content={currentLodging.equipments && currentLodging.equipments.map((equipment, index) => (
									<li key={index}>{equipment}</li>
								))} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
