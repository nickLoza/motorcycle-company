
interface IHelmet{
	title: string
	children: JSX.Element | JSX.Element[]
}

function Helmet({ title, children }: IHelmet) {
	document.title = "Electric Motorcycle -"+ title;


	return (
		<>
			{children}
		</>
	)
}

export default Helmet