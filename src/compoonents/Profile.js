import {Page} from "./Page.js";
import {useParams} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import Axios from "axios";
import {StateContext} from "../StateContext.js";
import {ProfilePosts} from "./ProfilePosts.js";
export function Profile() {
	const {username} = useParams();
	const appState = useContext(StateContext);
	const [profileData, setProfileData] = useState({
		pofileUsername: "...",
		profileAvatar: "htt[://gravatar.com/avatar/placeholder?s=128",
		isFollowing: false,
		counts: {postCount: "", followerCount: "", followingCount: ""}
	});
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await Axios.post(`http://localhost:8080/profile/${username}`, {token: appState.user.token});
				setProfileData(response.data);
			} catch (err) {
				console.log(err);
				console.log("There is some problem");
			}
		}
		fetchData();
	}, []);
	return (
		<Page>
			{" "}
			<h2>
				<img className="avatar-small" src={profileData.profileAvatar} />
				{profileData.profileUsername}
				<button className="btn btn-primary btn-sm ml-2">
					Follow <i className="fas fa-user-plus"></i>
				</button>
			</h2>
			<div className="profile-nav nav nav-tabs pt-2 mb-4">
				<a href="#" className="active nav-item nav-link">
					Posts: {profileData.counts.postCount}
				</a>
				<a href="#" className="nav-item nav-link">
					Followers: {profileData.counts.followerCount}
				</a>
				<a href="#" className="nav-item nav-link">
					Following: {profileData.counts.followingCount}
				</a>
			</div>
			<ProfilePosts />
		</Page>
	);
}
