import "./App.css";
import Card from "./Component/Card/Card";

function App() {
	return (
		<div className="App">
			<Card
				name="sweeney"
				phone="111-111-121"
				email="sydney_sweeney@hotmail.com"
				image={{
					url: "https://bit.ly/3B9JEMH",
					alt: "sweet cat",
				}}
				favored={false}
			/>
		</div>
	);
}

export default App;
