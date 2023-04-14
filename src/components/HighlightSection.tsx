interface IHighlight{
	videoUrl: string
	quote: string
}


function HighlightSection({ videoUrl, quote }: IHighlight) {
	return (
		<section className="section-highlight">
			<video 
				className="section-highlight-video"
				src={videoUrl}
				poster="https://i.postimg.cc/G3XtHD3R/hero-prev.webp"
				width={1200}
				height={600}
				muted 
				autoPlay
				loop
			/>
			<p className="section-highlight-quote">
				{quote}
			</p>
		</section>
	)
}

export default HighlightSection