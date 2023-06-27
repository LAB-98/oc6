import './Home.scss'
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import BannerImage from '../../assets/home_cover.png';

// Component
export default function Home() {
	return(
		<div className='Home'>
			<Banner
				image={BannerImage}
				content="Chez vous, partout et ailleurs"
			/>
			<Gallery />
		</div>
	);
}
