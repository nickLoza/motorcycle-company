import { useContext } from "react";
import Hero from "../components/Hero";
import HighlightSection from "../components/HighlightSection";
import ImgTextSection from "../components/ImgTextSection";
import { ContentContext } from "../provider/Provider";
import Helmet from "../components/helmet"

function Ecology() {

	const state = useContext(ContentContext)
	const {home, technology, ecology} = state;

	return (
		<Helmet title="ecology">
		<>
			<Hero videoUrl={ecology.heroUrl} posterUrl={ecology.posterUrl}/>
			{ecology.section_1?.map((sec,i)=>(
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
				videoUrl={ecology.hightlight.url} 
				quote={ecology.hightlight.quote}/>
		</>
		</Helmet>
	)
}

export default Ecology