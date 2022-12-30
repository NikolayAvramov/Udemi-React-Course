import {Link} from "react-router-dom";
import {LogginForm} from "./Login.js";
import {UserHeader} from "./UserHeader.js";
import {useContext} from "react";
import {StateContext} from "../StateContext.js";

export function Header(props) {
	const appState = useContext(StateContext);
	return (
		<header className="header-bar bg-primary mb-3">
			<div className="container d-flex flex-column flex-md-row align-items-center p-3">
				<h4 className="my-0 mr-md-auto font-weight-normal">
					<Link to="/" className="text-white">
						{" "}
						ComplexApp{" "}
					</Link>
				</h4>
				{appState.logedIn ? <UserHeader /> : <LogginForm />}
			</div>
		</header>
	);
}
