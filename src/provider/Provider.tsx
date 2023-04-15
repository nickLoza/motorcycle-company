import { createContext } from "react";


import homeHeroUrl from "../assets/videos/hd/home-hero.mp4";
import hightlightHomeUrl from "../assets/videos/hd/highlight-video.mp4";
import soundVideo from "../assets/videos/hd/sound-video.mp4";


 import { IContentContextProvider, IState} from "./types";

import techUrl from "../assets/videos/hd/technology-video.mp4";
import bannerSoundMotorcycle from "../assets/images/bike-sound-banner.webp";

import ecologyUrl from "../assets/videos/hd/ecology-video.mp4";

const state = {
		home: {
			heroUrl: homeHeroUrl,
			posterUrl: "https://i.postimg.cc/G2Lh0KFT/home-hero-0.webp",
			section_1: [
				{	
					url: "https://i.postimg.cc/LszKWJ3V/1.webp", 
					imgAlt: "motorcycle",
					title: "SPIRIT IN THE MACHINES",
					description: "We set out to create a machine unlike anything else. A new breed of electric motorcycles that honors the spirit of craftsmanship and embodies state of the art technology. The result is a vehicle that connects you closer to the riding experience by elevating all of your senses.",
					btn: null,
					imgRight: true,
				},
				{	
					url: "https://i.postimg.cc/L6bpgKsj/2.webp", 
					imgAlt: "motorcycle",
					title: "REINVENTING WHAT IT MEANS TO LOVE",
					description: "Tarform operates at the intersection of art, technology, and ecology. Our vision is to reinvent the way we move by developing awe inspiring, sustainable, and technologically advanced vehicles that make mobility exhilarating and soulful.",
					btn: "connect",
					imgRight: false,
				}
				],
			hightlight:{
				quote: "It’s a statement of intent, a blueprint for the future. – Jeff Goldblum, Disney+",
				url: hightlightHomeUrl,

			},
			techBanner:{
				text: "designed, engineered, and built in Brighton",
				videoUrl: techUrl,
				link: "technology",
			},
			ecoBanner:{
				text: "inspired by nature",
				imgUrl: "https://i.postimg.cc/RhCBKvfL/nature-img.webp",
				link: "ecology",
			}
		},
		technology: {
			heroUrl: techUrl,
			posterUrl: "https://i.postimg.cc/wjxpjMtn/technology-video-0.webp",
			section_1: [
				{	
					url: "https://i.postimg.cc/xTCQdT90/4.webp", 
					imgAlt: "motorcycle",
					title: "BUILT TO EVOLVE",
					description: "Electric Motorcycle is engineered to provide the optimal balance of high performance, superb handling and unparalleled build quality. Using industry 4.0 manufacturing and modular architecture, we are redefining how vehicles are made.",
					btn: null,
					imgRight: false,
				},
				{	
					url: "https://i.postimg.cc/26rRNCHN/5.webp", 
					imgAlt: "motorcycle",
					title: "SOLAR ENERGY SYSTEM",
					description: "Direct drive system which means there is no gearbox and no shifter. The concentric swingarm allows for even belt tension with more responsiveness. The progressive suspension with a linkage arm provides a smooth ride for the passenger",
					btn: null,
					imgRight: true,
				}
				],
			hightlight:{
				quote: "Electric cars are not only more efficient, but they're also better for the environment.. – Elon Musk",
				url: ecologyUrl,

			},
			banner:{
				title: "SOUND OF ENERGY",
				imgUrl: bannerSoundMotorcycle,
				videoUrl: soundVideo
			}
		},
		ecology: {
			heroUrl: ecologyUrl,
			posterUrl: "https://i.postimg.cc/D0qT8bP3/ecology-video-0.webp",
			section_1: [
				{	
					url: "https://i.postimg.cc/xTCQdT90/4.webp", 
					imgAlt: "motorcycle",
					title: "BUILT TO EVOLVE",
					description: "Electric Motorcycle is engineered to provide the optimal balance of high performance, superb handling and unparalleled build quality. Using industry 4.0 manufacturing and modular architecture, we are redefining how vehicles are made.",
					btn: null,
					imgRight: false,
				},
				{	
					url: "https://i.postimg.cc/26rRNCHN/5.webp", 
					imgAlt: "motorcycle",
					title: "SOLAR ENERGY SYSTEM",
					description: "Direct drive system which means there is no gearbox and no shifter. The concentric swingarm allows for even belt tension with more responsiveness. The progressive suspension with a linkage arm provides a smooth ride for the passenger",
					btn: null,
					imgRight: true,
				}
				],
			hightlight:{
				quote: "Electric cars are not only more efficient, but they're also better for the environment.. – Elon Musk",
				url: ecologyUrl,

			},
			banner:{
				title: "SOUND OF ENERGY",
				videoUrl: hightlightHomeUrl,
				text: "Giving a character to an inherently silent machine was a big undertaking. We solved it by amplifying the electromagnetic waves from the motor and created something unheard of in electric vehicles"
			}
		}
	};

export const ContentContext = createContext(state);


function ContentContextProvider({ children }: IContentContextProvider ){
	return (
		<ContentContext.Provider value={{...state}}>
			{ children }
		</ContentContext.Provider>
	)
}

export default ContentContextProvider;