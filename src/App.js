import {Header} from "./compoonents/Header.js";
import {HomeGuest} from "./compoonents/HoumeGuest.js";
import {Footer} from "./compoonents/Footer.js";
import {About} from "./compoonents/About.js";
import {Terms} from "./compoonents/Terms.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomeGuest />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/terms" element={<Terms />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
