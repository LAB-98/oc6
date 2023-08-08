import { useState, useEffect } from 'react';
import './AboutUs.scss';
import Collapse from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';
import BannerImage from '../../assets/about_cover.png';

export default function AboutUs() {
    const [aboutDatas, setAboutDatas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/about.json")
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => setAboutDatas(data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <main className='about_main'>
                <Banner
                    image={BannerImage}
                    content=""
                />
                {aboutDatas.map(data => (
                    <div key={data.id} className="about_main_collapse">
                        <Collapse
                            title={data.title}
                            content={data.content}
                        />
                    </div>
                ))}
            </main>
        </div>
    )
}
