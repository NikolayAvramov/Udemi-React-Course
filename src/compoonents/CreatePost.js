import Axios from "axios";
import {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Page} from "./Page.js";
import {DispatchContext} from "../DispatchContext.js";
import {StateContext} from "../StateContext.js";

export function CreatePost(props) {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();
	const navigate = useNavigate();
	const appDispatch = useContext(DispatchContext);
	const appState = useContext(StateContext);
	async function create(e) {
		e.preventDefault();
		try {
			const response = await Axios.post("http://localhost:8080/create-post", {title, body, token: appState.user.token});
			//Redirect to new post  Url
			appDispatch({type: "flashMessage", value: "You make a post!"});
			navigate(`/post/${response.data}`);
		} catch (err) {
			console.log(err.message);
		}
	}
	return (
		<Page title="Create New Post">
			<form onSubmit={create}>
				<div className="form-group">
					<label htmlFor="post-title" className="text-muted mb-1">
						<small>Title</small>
					</label>
					<input onChange={e => setTitle(e.currentTarget.value)} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
				</div>

				<div className="form-group">
					<label htmlFor="post-body" className="text-muted mb-1 d-block">
						<small>Body Content</small>
					</label>
					<textarea onChange={e => setBody(e.currentTarget.value)} name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
				</div>

				<button className="btn btn-primary">Save New Post</button>
			</form>
		</Page>
	);
}
