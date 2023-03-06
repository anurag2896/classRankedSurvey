import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

function DateRangeFilter(props) {
	return (
		<DateRangePicker
			defaultValue={props.defaultValue}
			value={props.value}
			onChange={props.onChange}
		/>
	);
}

export default DateRangeFilter;
