import {useContext} from "react";
import {Link} from "react-router-dom";
import {DispatchContext} from "../DispatchContext.js";
import {StateContext} from "../StateContext.js";
export function UserHeader(props) {
	const appDispatch = useContext(DispatchContext);
	const appState = useContext(StateContext);
	function logout() {
		appDispatch({type: "logout"});
	}

	return (
		<div className="flex-row my-3 my-md-0">
			<Link to="#" className="text-white mr-2 header-search-icon">
				<i className="fas fa-search"></i>
			</Link>
			<span className="mr-2 header-chat-icon text-white">
				<i className="fas fa-comment"></i>
				<span className="chat-count-badge text-white"> </span>
			</span>
			<Link to={`/profile/${appState.user.username}`} className="mr-2">
				<img className="small-header-avatar" src={appState.user.avatar} />
			</Link>
			<Link className="btn btn-sm btn-success mr-2" to="/create-post">
				Create Post
			</Link>
			<button onClick={logout} className="btn btn-sm btn-secondary">
				Sign Out
			</button>
		</div>
	);
}
