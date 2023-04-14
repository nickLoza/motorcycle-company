import Hero from "../components/Hero"
import { ContentContext } from "../provider/Provider";
import ImgTextSection from "../components/ImgTextSection";
import HighlightSection from "../components/HighlightSection";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import { AiOutlinePlayCircle,AiOutlineClose} from "react-icons/ai"
import Helmet from "../components/helmet";

function Technology() {

	const [ showVideo, setShowVideo ] = useState<boolean>(false);

	function togglePlay(){
		setShowVideo(!showVideo)
		
	}

	const state = useContext(ContentContext)
	const {home, technology, ecology} = state;

	return (
		<Helmet title="technology">
			<>
			<Hero videoUrl={technology.heroUrl}/>
			{technology.section_1?.map((sec,i)=>(
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
				videoUrl={technology.hightlight.url} 
				quote={technology.hightlight.quote}/>
			<section className="banner-sound">
				<img 
					className="banner-sound__img"
					src={technology.banner.imgUrl} 
					alt="motorcycle"/>
				{showVideo && 
					<div className="banner-sound__reproducer">
					<button 
						className="banner-sound__reproducer-btn"
						onClick={togglePlay}>
						<AiOutlineClose/>
					</button>
					<video 
					autoPlay
					controls
					className="banner-sound__reproducer-video"
					poster={technology.banner.imgUrl}
					src={technology.banner.videoUrl} 
					width={1920}
					height={800}/>
				</div>
				}
				<h3 className="banner-sound__title">
					{technology.banner.title}
				</h3>
				<button className="banner-sound__btn" onClick={togglePlay}>
					<AiOutlinePlayCircle/>
				</button>
			</section>
		</>
		</Helmet>
	)
}

export default Technology