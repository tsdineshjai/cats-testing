import React from "react";
import "./Card.css";
import heartFilled from "./svgs/heartFilled.svg";
import hearOutlined from "./svgs/heartOutlined.svg";

function Card({ name, email, phone, image, favored }) {
	const [heart, setHeart] = React.useState(favored);
	const handleClick = (e) => {
		e.preventDefault();
		setHeart((prev) => !prev);
	};
	return (
		<div className="card">
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
		</div>
	);
}

export default Card;
