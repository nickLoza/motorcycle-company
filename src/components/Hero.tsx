
interface IHero{
	videoUrl: string
}

function Hero({ videoUrl }: IHero) {
	return (
		<section className="hero">
			<video 
				className="hero__video"
				src={videoUrl} 
				poster="https://i.postimg.cc/G3XtHD3R/hero-prev.webp" 
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