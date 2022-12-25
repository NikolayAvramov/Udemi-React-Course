import {Link} from "react-router-dom";
import {LogginForm} from "./Login.js";
import {UserHeader} from "./UserHeader.js";
import {useState} from "react";

export function Header(props) {
	return (
		<header className="header-bar bg-primary mb-3">
			<div className="container d-flex flex-column flex-md-row align-items-center p-3">
				<h4 className="my-0 mr-md-auto font-weight-normal">
					<Link to="/" className="text-white">
						{" "}
						ComplexApp{" "}
					</Link>
				</h4>
				{props.logedIn ? <UserHeader setLoggedIn={props.setLoggedIn} /> : <LogginForm setLoggedIn={props.setLoggedIn} />}
			</div>
		</header>
	);
}
