import { useEffect, useState } from "react";
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
	useFilters,
} from "react-table";

import "./Table.css";
import { SearchFilter } from "../Filters/SearchFilter/SearchFilter";
import DateRangeFilter from "../Filters/DateRangeFilter/DateFilter";

export const Table = (props) => {
	const [surveys, setSurveys] = useState(props.data);

	const defaultDateRange = [
		new Date("2020-01-01 01:00:00"),
		new Date("2022-03-01 01:00:00"),
	];

	const [dateRange, setDateRange] = useState(defaultDateRange);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		rows,
		setGlobalFilter,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		nextPage,
		previousPage,
		state: { pageIndex, globalFilter },
	} = useTable(
		{
			columns: props.columns,
			data: surveys,
			initialState: { pageIndex: 0, pageSize: 5 },
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	useEffect(() => {
		props.setFilteredRows(rows);
	}, [props, rows]);

	const generateSortingIndicator = (column) => {
		return column.isSorted ? (column.isSortedDesc ? "↓" : "↑") : "";
	};

	const filterTableByDate = (dateRange) => {
		dateRange = dateRange ? dateRange : defaultDateRange;
		let fiteredSurveys = surveys.filter((survey) => {
			let startDate = new Date(survey.start_timestamp);
			return startDate >= dateRange[0] && startDate <= dateRange[1];
		});
		setSurveys(fiteredSurveys);
		setDateRange(dateRange);
	};

	return (
		<div>
			<div className="FilterRow">
				<SearchFilter
					filter={globalFilter}
					setFilter={setGlobalFilter}
				></SearchFilter>
				<DateRangeFilter
					defaultValue={defaultDateRange}
					value={dateRange}
					onChange={filterTableByDate}
				/>
			</div>
			<div className="container">
				<div className="title">Your Surveys</div>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render("Header")}
										<span>{generateSortingIndicator(column)}</span>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td
												{...cell.getCellProps({
													style: {
														minWidth: cell.column.minWidth,
													},
												})}
											>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className="pagination">
					<span className="pageInfo">
						Page {pageIndex + 1} of {pageOptions.length}{" "}
					</span>
					<button
						className="paginationButton"
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
					>
						{"<"}
					</button>
					<button
						className="paginationButton"
						onClick={() => nextPage()}
						disabled={!canNextPage}
					>
						{">"}
					</button>
				</div>
			</div>
		</div>
	);
};
