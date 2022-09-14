import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

function Cards({ cats, setCats }) {
	const updateFavored = (index, favoured) => {
		const updatedCats = [...cats];
		updatedCats[index].favoured = favoured;
		setCats(updatedCats);
	};
	return (
		<div className="cards-container">
			{cats.map((cat,index) => {
				const { id, phone, email, image, favoured } = cat;
				return (
					<Card
						key={id}
						phone={phone}
						email={email}
						image={image}
						favoured={favoured}
						updateFavored={updateFavored}
						index={index}
					/>
				);
			})}
		</div>
	);
}

export default Cards;
