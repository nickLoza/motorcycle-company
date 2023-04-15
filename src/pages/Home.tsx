import Hero from "../components/Hero"
import { ContentContext } from "../provider/Provider";
import ImgTextSection from "../components/ImgTextSection";
import HighlightSection from "../components/HighlightSection";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Helmet from "../components/helmet";



function Home() {
	const state = useContext(ContentContext)
	const { home } = state;

	return (
		<Helmet title="home">
			<>
			<Hero videoUrl={home.heroUrl} posterUrl={home.posterUrl}/>
			{home.section_1?.map((sec,i)=>(
				<ImgTextSection 
					key={i} 
					url={sec.url} 
					imgAlt={sec.imgAlt} 
					title={sec.title} 
					description={sec.description} 
					imgRight={sec.imgRight}
					btn={sec.btn}/>
			))}
			<HighlightSection 
				videoUrl={home.hightlight.url} 
				quote={home.hightlight.quote}/>
			<section className="banner-tech">
				<video 
					className="banner-tech__video"
					src={home.techBanner.videoUrl} 
					muted
					autoPlay
					loop
					width={1920}
					height={800}/>
				<h3 className="banner-tech__title">
					{home.techBanner.text}
				</h3>
				<Link 
					className="banner-tech__link" 
					role="button"
					to={`/${home.techBanner.link}`}>
					{home.techBanner.link.toUpperCase()}
				</Link>
			</section>
			<section className="banner-eco">
				<img className="banner-eco__img" src={home.ecoBanner.imgUrl} alt="nature"/>
				<div className="banner-eco__text">
					<h3 className="banner-eco__title">
					{home.ecoBanner.text}
					</h3>
					<Link 
						className="banner-eco__link" 
						role="button"
						to={`/${home.ecoBanner.link}`}>
						{home.ecoBanner.link.toUpperCase()}
					</Link>
				</div>

			</section>
		</>
		</Helmet>
	)
}

export default Home


