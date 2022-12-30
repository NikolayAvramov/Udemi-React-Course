export function FlashMessage(props) {
	return (
		<div className="floating-alerts">
			{props.mesages.map((message, index) => {
				return (
					<div key={index} className="alert alert-success text-center floating-alert shadow-sm">
						{message}
					</div>
				);
			})}
		</div>
	);
}
