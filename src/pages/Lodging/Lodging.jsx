import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from '../../components/Collapse/Collapse';
import redStar from '../../assets/red_star.png';
import greyStar from '../../assets/grey_star.png';

import './Lodging.scss';

export default function Lodging() {
    const { id } = useParams();
    const [currentLodging, setCurrentLodging] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/lodging.json")
        .then(function(res) {
            if(res.ok) {
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
                // Here you can handle the case where the lodging id was not found
                // You could for example redirect the user to a 404 page
            }
        })
        .catch(function(err){
            console.log(err);
            // Here you can handle errors that occurred while fetching the data
        });
    }, [id]);

    return (
        <div className='Lodging'>
            {currentLodging && (
                <div className='Lodging_content'>
                    <h1 className='Lodging_content_infos'>{currentLodging.title}</h1>
                    <p>{currentLodging.location}</p>
                    <div>
                        {currentLodging.tags.map((tag, index) => (
                            <button key={index}>{tag}</button>
                        ))}
                    </div>
                    <div className='Lodging_content_host'>
                        <span>{currentLodging.host.name.split(' ')[0]}</span>
                        <span>{currentLodging.host.name.split(' ')[1]}</span>
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
                    <div className="Lodging_collapse">
                        <div className="Lodging_collapse_item">
                            <Collapse title={'Description'} content={currentLodging.description} />   
                        </div>
                        <div className="Lodging_collapse_item">
                            <Collapse title={'Equipments'} content={currentLodging.equipments}/>
                        </div>  
                    </div>
                </div>
            )}
        </div>
    )
}
