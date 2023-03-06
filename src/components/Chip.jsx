function findColor(label) {
	if (label === "Active")
		return { backgroundColor: "#E0FFE2", color: "#18704D" };
	else if (label === "Pending")
		return { backgroundColor: "#F4EBB5", color: "#D2B616" };
	else if (label === "Disabled")
		return { backgroundColor: "#F0F0F0", color: "#303030" };
	else if (label === "Deleted")
		return { backgroundColor: "#FECDCA", color: "#F6493D" };
}

const styles = {
	border: "1px solid #ddd",
	borderRadius: "16px",
	padding: "4px 8px",
	display: "inline-flex",
};

export function ChipComponent(props) {
	return (
		<span style={{ ...styles, ...findColor(props.label) }}>
			<span
				style={{
					fontSize: "6px",
					height: "8px",
					width: "8px",
					borderRadius: "50%",
					margin: "4px",
					backgroundColor: findColor(props.label).color,
					display: "inline-flex",
					alignItems: "center",
				}}
			></span>
			<span>{props.label}</span>
		</span>
	);
}
