import './Err404.scss'
import { Link } from 'react-router-dom';

// NotFound Component displays a 404 error page to the user when they navigate to a route that doesn't exist
export default function Err404() {
	return (
		<div className='err404'>
			<div className="err404_infos">
				<h1 className='err404_infos_title'>404</h1>
				<p className='err404_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
			<Link className='err404_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}
