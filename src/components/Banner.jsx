const BannerStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	margin: "2rem 2rem",
};

function Banner({ title, description }) {
	return (
		<>
			<div style={BannerStyle}>
				<div style={{ fontSize: "24px", color: "#000" }}>{title}</div>
				<div style={{ fontSize: "16px", color: "#5A5A5A" }}>{description}</div>
			</div>
		</>
	);
}

export default Banner;
