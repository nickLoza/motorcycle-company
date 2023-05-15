import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				<div className="footer__content-links links">
					<Link 
						className="links__link hover-link"
						to="#">
						Lorem
					</Link>
					<Link 
						className="links__link hover-link"
						to="#">
						Lorem
					</Link>
					<Link 
						className="links__link hover-link"
						to="#">
						Lorem
					</Link>
					<Link 
						className="links__link hover-link"
						to="#">
						Lorem
					</Link>
				</div>
				<div className="footer__content-socials socials">
					<Link 
						className="socials__link hover-link"
						to="http://www.instagram.com" 
						target="_blank">
						<AiOutlineInstagram/>
					</Link>
					<Link 
						className="socials__link hover-link"
						to="https://www.linkedin.com/in/nicklozadev/" 
						target="_blank">
						<AiOutlineLinkedin/>
					</Link>
				</div>
				<div className="footer__content-info info">	
					<a  className="info__link"
					href="https://github.com/nickLoza/motorcycle-company"
					target="_blank">
					<AiOutlineGithub/>Repository 
					</a>
					<a  className="info__link"
					href="https://www.linkedin.com/in/nicklozadev/"
					target="_blank">
					<AiOutlineLinkedin/>Linkedin 
					</a>
					</div>
					</div>
					<p className="footer__copyright">
					©Motorcycle Inc 2023 All Rights Reserved.
					</p>
				</footer>
	)
}

export default Footer