import { ReactNode } from "react"

interface ISectionObject{	
	url: string, 
	imgAlt: string,
	title: string,
	description: string,
	btn: null|string,
	imgRight: boolean,
}	

export interface IState{
	home: {
		heroUrl: string,
			section_1: Array<ISectionObject>,
			hightlight:{
				quote: string,
				url: string,

			},
			techBanner:{
				text: string,
				videoUrl: string,
				imgUrl: string,
				link: string,
			},
			ecoBanner:{
				text: string,
				imgUrl: string,
				link: string,
			}
		},
	technology: {
			heroUrl: string,
			section_1: Array<ISectionObject>,
			hightlight:{
				quote: string,
				url: string,

			},
			banner:{
				title: string,
				videoUrl: string
			}
		},
	ecology: {
			heroUrl: string,
			section_1: Array<ISectionObject>,
			hightlight:{
				quote: string,
				url: string,

			},
			banner:{
				title: string,
				videoUrl: string,
				text: string
			}
		}
}

export interface IContentContext{
	state: IState

};

export interface IContentContextProvider{
	children: ReactNode
}