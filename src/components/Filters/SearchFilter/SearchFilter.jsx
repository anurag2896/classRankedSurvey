import "./SearchFilter.css";
import SearchIcon from "@mui/icons-material/Search";

export const SearchFilter = ({ filter, setFilter }) => {
	return (
		<div className="SearchFilter">
			<span>
				<SearchIcon />
			</span>
			<input
				className="SearchFilterInput"
				placeholder="Search through your surveys"
				value={filter || ""}
				onChange={(e) => setFilter(e.target.value)}
			/>
		</div>
	);
};
