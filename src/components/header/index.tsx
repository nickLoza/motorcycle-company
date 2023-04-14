import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom"


const linksArray = ["home","technology","ecology","connect"]

function Header() {

	const [ toggle, setToggle ] = useState<boolean>(false)

	function handleOnClick(){
		setToggle(!toggle);
	}

	return (
		<header className="header">
			<nav className="header__navbar navbar">
				<Link to="home" className="navbar__logo">
					<img 
						className="navbar__logo-img"
						src="https://i.postimg.cc/hvrtQrLd/hd.webp" 
						alt="logo harley davidson"
						height="40px"
						width="175"/>
				</Link>
				<button className="navbar__toggle">
					{toggle? 
					<AiOutlineClose 
						className="navbar__toggle-icon"
						onClick={handleOnClick}/>
					:
					<AiOutlineMenu 
						className="navbar__toggle-icon"
						onClick={handleOnClick}/>}
				</button>
				<ul 
					className={toggle? "navbar__menu active" : "navbar__menu"}
					onClick={handleOnClick}>
					<div className="navbar__menu-overlay"></div>
					{linksArray.map((text,i)=>(
						<li key={i} className="navbar__menu-li">
							<NavLink 
								className="navbar__menu-link"
								to={text}>
								{text.toUpperCase()}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

		</header>
	)
}

export default Header