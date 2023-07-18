import './Gallery.scss';
import ArrowRight from '../../assets/chevron_carousel_right.png';
import ArrowLeft from '../../assets/chevron_carousel_left.png';
import { useState } from 'react';

export default function Gallery(props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % props.images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + props.images.length) % props.images.length);
    };

    return (
        <section className='carousel'>
            {props.images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`slide ${index}`}
                    style={{
                        position: "absolute",
						borderRadius: 25,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: index === currentIndex ? 1 : 0,
                        transition: "opacity 1s ease"
                    }}
                />
            ))}
            {props.images.length > 1 &&
                <div>
                    <img
                        className='carousel_arrow carousel_arrow_right'
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />
                    <img
                        className='carousel_arrow carousel_arrow_left'
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {props.images.length}</p>
                </div>
            }
        </section>
    )
}
