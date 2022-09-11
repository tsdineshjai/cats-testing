import React from "react";

function Card({ name, email, phone, image, favored }) {
	return (
		<div className="card">
			<div className="card-header">
				<img src={image.url} alt={image.alt} className="card-img" />
			</div>
			<div className="card-content">
				<h3>{name}</h3>
				<h6>{phone}</h6>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
