import { Link } from "react-router-dom"

interface IImgTextSection{
	url: string
	imgAlt: string
	title: string
	description: string
	btn?: string|null
	imgRight: boolean
}


function ImgTextSection({ url,imgAlt,title,description,btn,imgRight }: IImgTextSection ) {
	return (
		<section className={imgRight? "section" : "section section--reverse"}>
			<div className="section__text">
				<h2 className="section__text-title">{title}</h2>
				<p className="section__text-description">{description}</p>
				{btn && 
				<Link className="section__text-btn" role="button" to={`/${btn}`}>
					{btn.toUpperCase()}
				</Link>}
			</div>
			<img className="section__img" src={url} alt={imgAlt}/>
		</section>
	)
}

export default ImgTextSection
