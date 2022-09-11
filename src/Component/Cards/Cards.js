import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

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
						image={image}
						favoured={favoured}
					/>
				);
			})}
		</div>
	);
}

export default Cards;
