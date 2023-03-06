import "./CopyLink.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const CopyLink = ({ link }) => {
	return (
		<div className="CopyLink">
			<input type="text" className="CopyLinkInput" value={link} readOnly />
			<button
				type="button"
				className="CopyLinkButton"
				onClick={() => {
					navigator.clipboard.writeText(link);
				}}
			>
				<span>
					<ContentCopyIcon color="primary" />
				</span>
			</button>
		</div>
	);
};
