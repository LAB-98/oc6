import './Gallery.scss'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState } from 'react'

export default function Gallery(props) {

	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		setCurrentIndex(currentIndex + 1)
		if(currentIndex === props.images.length - 1)
			setCurrentIndex(0)
	}

	const prevSlide = () => {
		setCurrentIndex(currentIndex - 1)
		if(currentIndex === 0)
			setCurrentIndex(props.images.length - 1)
	}

	return (
		<section style={{backgroundImage : `url(${props.images[currentIndex]})`}} className='carousel'>
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
