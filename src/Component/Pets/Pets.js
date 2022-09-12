import React, { useEffect } from "react";

import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import axios from "axios";

function Pets() {
	const [cats, setCats] = React.useState([]);
	const [filteredCats, setFilteredCats] = React.useState([]);
	const [filters, setFilters] = React.useState({
		gender: "any",
	});

	const fetchCatData = async () => {
		const response = await axios.get("http://localhost:4000/cats");
		setCats(response.data);
		setFilteredCats(response.data);
	};

	useEffect(() => {
		fetchCatData();
	}, []);

	useEffect(() => {
		let catsFiltered = [...cats];
		if (filters.gender !== "any") {
			catsFiltered = catsFiltered.filter(
				(Cat) => Cat.gender === filters.gender
			);
		}
		setFilteredCats(catsFiltered);
	}, [filters, cats]);

	return (
		<div className="container">
			<div className="pets-container">
				<Filter filters={filters} setFilters={setFilters} />
				<Cards cats={filteredCats} />
			</div>
		</div>
	);
}

export default Pets;
