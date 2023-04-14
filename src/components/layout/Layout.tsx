import Routers from "../../routers/Routers"
import Footer from "../footer/Index"
import Header from "../header"

function Layout() {
	return (
		<>
			<Header/>
			<Routers/>
			<Footer/>
		</>
	)
}

export default Layout