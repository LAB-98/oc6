import React, { useState, useEffect } from 'react';
import './Gallery.scss'
import Card from '../Card/Card';

export default function Gallery() {
    const [datas, setDatas] = useState([]);
    
    useEffect(() => {
        fetch('/lodging.json')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(setDatas)
            .catch(console.error);
    }, []);

    return (
        <main className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    );
}
