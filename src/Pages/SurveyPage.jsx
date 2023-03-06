import { useState, useMemo } from "react";
import { Table } from "../components/Table/Table";
import Banner from "../components/Banner";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CsvDownload from "../components/CsvDownload";
import MOCK_DATA from "../MOCK_DATA.json";
import { format } from "date-fns";
import {
	DateRangeColumnFilter,
	dateBetweenFilterFn,
} from "../components/Filters/DateRangeFilter/DateRangeFilter";
import { ChipComponent } from "../components/Chip";
import { CopyLink } from "../components/CopyLink/CopyLink";

const COLUMNS = [
	{
		Header: "Status",
		accessor: "status",
		minWidth: 200,
		Cell: ({ value }) => {
			return <ChipComponent label={value} color="primary" />;
		},
	},
	{ Header: "Title", accessor: "title", minWidth: 200 },
	{
		Header: "Date Created",
		accessor: "start_timestamp",
		minWidth: 200,
		Cell: ({ value }) => {
			return format(new Date(value), "MMM dd, yyyy");
		},
		Filter: DateRangeColumnFilter,
		filter: dateBetweenFilterFn,
	},
	{
		Header: "Hyperlink",
		accessor: "survey_url",
		minWidth: 200,
		Cell: ({ value }) => {
			return <CopyLink link={value} />;
		},
	},
];

function SurveyPage() {
	const columns = useMemo(() => COLUMNS, []);

	//use effect api call here to fetch data
	const data = useMemo(() => MOCK_DATA, []);

	const [filteredRows, setFilteredRows] = useState(data);
	return (
		<>
			<hr
				style={{
					color: "#ddd",
					height: "1px",
				}}
			/>
			<div className="SurveyPage">
				<Banner
					title="Survey Dashboard"
					description="All your survey activity displayed in one convenient place"
				/>
				<div className="ButtonRow">
					<CsvDownload
						text="EXPORT"
						data={filteredRows.map((row) => row.original)}
						icon={<FileDownloadIcon />}
					/>
					<Button
						variant="contained"
						startIcon={<AddIcon />}
						onClick={() => {
							alert("redirect to create survey page");
						}}
					>
						NEW SURVEY
					</Button>
				</div>
				<hr
					style={{
						color: "#ddd",
						height: "1px",
					}}
				/>
				<Table
					columns={columns}
					data={data}
					setFilteredRows={setFilteredRows}
				/>
			</div>
		</>
	);
	// return <Table />;
}

export default SurveyPage;
