import './banner.scss'
import { useLocation } from 'react-router-dom';

function useAboutPage() {
	const location = useLocation();
	const isAboutPage = location.pathname === '/about-us';
	return isAboutPage;
}

export default function Banner() {
	const isAboutPage = useAboutPage();

	return (
		<section className={isAboutPage ? 'banner_about' : 'banner'}>
			{!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}

