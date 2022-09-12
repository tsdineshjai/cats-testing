import React, { useEffect } from "react";

import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import axios from "axios";

function Pets() {
	const [cats, setCats] = React.useState([]);

	const fetchCatData = async () => {
		const response = await axios.get("http://localhost:4000/cats");
		setCats(response.data);
	};

	useEffect(() => {
		fetchCatData();
	}, [cats]);
	return (
		<div className="container">
			<div className="pets-container">
				<Filter />
				<Cards cats={cats} />
			</div>
		</div>
	);
}

export default Pets;
