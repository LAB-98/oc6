import './Card.scss'
import { Link } from 'react-router-dom'

export default function Card(props) {

	return (
		<Link to={`/lodging/${props.id}`} className="gallery_card">
			<img src={props.cover} alt={props.title} />
			<h3>{props.title}</h3>
		</Link>
	)
}