import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StateContext} from "./StateContext.js";
import {DispatchContext} from "./DispatchContext.js";
import {useImmerReducer} from "use-immer";
import {Header} from "./compoonents/Header.js";
import {HomeGuest} from "./compoonents/HoumeGuest.js";
import {Footer} from "./compoonents/Footer.js";
import {About} from "./compoonents/About.js";
import {Terms} from "./compoonents/Terms.js";
import {Home} from "./compoonents/Home.js";
import {useEffect, useReducer} from "react";
import {CreatePost} from "./compoonents/CreatePost.js";
import {ViewSinglePost} from "./compoonents/ViewSinglePost.js";
import {FlashMessage} from "./FlashMessages.js";
import {Profile} from "./compoonents/Profile.js";
function App() {
	const initState = {
		logedIn: Boolean(sessionStorage.getItem("userName")),
		flashMessages: [],
		user: {
			token: sessionStorage.getItem("userToken"),
			username: sessionStorage.getItem("userName"),
			avatar: sessionStorage.getItem("userAvatar")
		}
	};
	function ourReducer(draft, action) {
		switch (action.type) {
			case "login":
				draft.logedIn = true;
				draft.user = action.data;
				break;
			case "logout":
				draft.logedIn = false;
				break;
			case "flashMessage":
				draft.flashMessages.push(action.value);
				break;
		}
	}

	const [state, dispatch] = useImmerReducer(ourReducer, initState);
	useEffect(() => {
		if (state.logedIn) {
			sessionStorage.setItem("userToken", state.user.token);
			sessionStorage.setItem("userName", state.user.username);
			sessionStorage.setItem("userAvatar", state.user.avatar);
		} else {
			sessionStorage.removeItem("userToken");
			sessionStorage.removeItem("userName");
			sessionStorage.removeItem("userAvatar");
		}
	}, [state.logedIn]);
	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<BrowserRouter>
					<FlashMessage mesages={state.flashMessages} />
					<Header />

					<Routes>
						<Route path="/profile/:username/*" element={<Profile />} />
						<Route path="/" element={state.logedIn ? <Home /> : <HomeGuest />} />
						<Route path="/post/:id" element={<ViewSinglePost />} />
						<Route path="/create-post" element={<CreatePost />} />
						<Route path="/about-us" element={<About />} />
						<Route path="/terms" element={<Terms />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
}
export default App;
