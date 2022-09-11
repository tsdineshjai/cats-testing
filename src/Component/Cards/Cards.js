import React from "react";
import Card from "../Card/Card";

function Cards({ cats }) {
	return (
		<div className="cards-container">
			{cats.map((cat) => {
				const { id, phone, email, image, favoured } = cat;
				return (
					<Card
						key={id}
						phone={phone}
						email={email}
						image={image.url}
						favoured={favoured}
					/>
				);
			})}
		</div>
	);
}

export default Cards;
