import {Container} from "./Container.js";
import {useEffect} from "react";
export function Page(props) {
	useEffect(() => {
		document.title = `${props.title}`;
		window.scrollTo(0, 0);
	}, []);
	return <Container wide={props.wide}> {props.children}</Container>;
}
