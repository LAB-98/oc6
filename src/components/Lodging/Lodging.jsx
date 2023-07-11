import './Lodging.scss';
import ArrowRight from '../../assets/chevron_carousel_right.png';
import ArrowLeft from '../../assets/chevron_carousel_left.png';
import { useState } from 'react';

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === imageSlider.length - 1 ? 0 : prevIndex + 1
        );
    }

    const prevSlide = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
        );
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && 
                <>
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
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    );
}
