import './Banner.scss'

export default function Banner(props) {
	return (
		<section className='banner'>
			<img src={props.image} alt={props.content} title={props.content} />
			<p>{props.content}</p>
		</section>
	)
}
