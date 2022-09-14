import React from "react";
import "./Card.css";
import heartFilled from "./svgs/heartFilled.svg";
import hearOutlined from "./svgs/heartOutlined.svg";

function Card({ name, email, phone, image, favoured, updateFavored, index }) {
	const [heart, setHeart] = React.useState(favoured);
	const handleClick = (e) => {
		e.preventDefault();
		console.log(e.target);
		updateFavored(index, !heart);
		setHeart(!heart); 
	};
	return (
		<article className="card">
			<div className="card-header">
				<img src={image.url} alt={image.alt} className="card-img" />
				<button onClick={handleClick}>
					{heart ? (
						<img src={heartFilled} alt="filled heart" />
					) : (
						<img src={hearOutlined} alt="outlined heart" />
					)}
				</button>
			</div>
			<div className="card-content">
				<h3>{name}</h3>
				<h6>{phone}</h6>
				<p>{email}</p>
			</div>
		</article>
	);
}

export default Card;
