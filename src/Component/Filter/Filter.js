import React from "react";

function Filter({ filters, setFilters }) {
	return (
		<div className="filter">
			<label htmlFor="favourite">Favourite</label>
			<select
				name="favourite"
				id="favourite"
				onChange={(e) => {
					setFilters({
						...filters,
						favourite: e.target.value,
					});
				}}
			>
				<option value="any">Any</option>
				<option value="favoured">Favoured</option>
				<option value="non favoured">non Favoured</option>
			</select>

			<label htmlFor="gender">Gender</label>
			<select
				name="gender"
				id="gender"
				onChange={(e) => {
					setFilters({
						...filters,
						gender: e.target.value,
					});
				}}
			>
				<option value="any">Any</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
		</div>
	);
}

export default Filter;
