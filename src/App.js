import {Header} from "./compoonents/Header.js";
import {HomeGuest} from "./compoonents/HoumeGuest.js";
import {Footer} from "./compoonents/Footer.js";
import {About} from "./compoonents/About.js";
import {Terms} from "./compoonents/Terms.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./compoonents/Home.js";
import {useState} from "react";
function App() {
	const [logedIn, setLoggedIn] = useState(Boolean(sessionStorage.getItem("userName")));

	return (
		<BrowserRouter>
			<Header logedIn={logedIn} setLoggedIn={setLoggedIn} />
			<Routes>
				<Route path="/" element={logedIn ? <Home /> : <HomeGuest />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/terms" element={<Terms />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
