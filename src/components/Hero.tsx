
interface IHero{
	videoUrl: string
	posterUrl: string
}

function Hero({ videoUrl, posterUrl }: IHero) {
	return (
		<section className="hero">
			<video 
				className="hero__video"
				src={videoUrl} 
				poster={posterUrl}
				width={1920}
				height={800}
				muted 
				autoPlay 
				loop/>
			<div className="hero__overlay"></div>
		</section>
	)
}

export default Hero