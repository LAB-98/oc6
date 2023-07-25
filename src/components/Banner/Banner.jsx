import './Banner.scss'

export default function Banner(props) {
	return (
		<section className='banner'>
			<img src={props.image} alt={props.content.props.children} title={props.content.props.children} />
			<p>{props.content}</p>
		</section>
	)
}
