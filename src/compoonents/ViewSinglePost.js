import {Page} from "./Page.js";
import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import Axios from "axios";
import {LoadingIcons} from "./LoadingIcons.js";
export function ViewSinglePost() {
	const {id} = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [post, setPost] = useState();
	useEffect(() => {
		async function fetchPost() {
			try {
				const response = await Axios.get(`http://localhost:8080/post/${id}`);
				setPost(response.data);
				setIsLoading(false);
			} catch (e) {
				console.log(e);
			}
		}
		fetchPost();
	}, []);

	if (isLoading) {
		return (
			<Page title="...">
				<LoadingIcons />
			</Page>
		);
	}
	const date = new Date(post.createdDate);
	const dateFormated = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	return (
		<Page title={post.title}>
			<div className="d-flex justify-content-between">
				<h2>{post.title}</h2>
				<span className="pt-2">
					<a href="#" className="text-primary mr-2" title="Edit">
						<i className="fas fa-edit"></i>
					</a>
					<a className="delete-post-button text-danger" title="Delete">
						<i className="fas fa-trash"></i>
					</a>
				</span>
			</div>

			<p className="text-muted small mb-4">
				<Link to={`/profile/${post.author.username}`}>
					<img className="avatar-tiny" src={post.author.avatar} />
				</Link>
				Posted by <Link to={`/profile/${post.author.username}`}>{post.author.username}</Link> on {dateFormated}
			</p>

			<div className="body-content">{post.body}</div>
		</Page>
	);
}
