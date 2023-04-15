import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const Home = lazy(()=> import("../pages/Home"));
const Ecology = lazy(()=> import("../pages/Ecology"));
const Technology = lazy(()=> import("../pages/Technology"));
const Connect = lazy(()=> import("../pages/Connect"));

function Routers() {
	return (
		<Suspense fallback={
			<PuffLoader
			  className="spinner"
			  color="#a6a6a6"
			  size={100}/>
		}>
			<Routes>
				<Route path="" element={<Navigate to="home"/>}/>
				<Route path="home" element={<Home/>}/>
				<Route path="ecology" element={<Ecology/>}/>
				<Route path="technology" element={<Technology/>}/>
				<Route path="connect" element={<Connect/>}/>
				<Route path="*" element={<Navigate to="home"/>}/>
			</Routes>
		</Suspense>
	)
}

export default Routers