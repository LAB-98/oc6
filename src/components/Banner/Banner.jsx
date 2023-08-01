import './Banner.scss'

export default function Banner({ image, content, variant }) {
    return (
        <section className={`banner ${variant}`}>
            <img src={image} alt={content} title={content} />
            <p>{content}</p>
        </section>
    )
}
