import { render, screen } from "@testing-library/react";
import Card from "../Card";

const cardProps = {
	name: "sweeney",
	phone: "111-111-121",
	mail: "sydney_sweeney@hotmail.com",
	image: {
		url: "https://bit.ly/3B9JEMH",
		alt: "sweet cat",
	},
	favored: false,
};

describe("Card", () => {
	//writing three tests to check for the name , phone ane email
	test("to check the cat name", () => {
		render(<Card {...cardProps} />);
		expect(
			screen.getByRole("heading", { name: /sweeney/i })
		).toBeInTheDocument();
	});

	test("checking the catss phone", () => {
		render(<Card {...cardProps} />);
		expect(screen.getByText(/111-111-121/i)).toBeInTheDocument();
	});

	test("checking the email of the cat", () => {
		render(<Card {...cardProps} />);
		expect(screen.getByText(/sydney_sweeney@hotmail.com/i)).toBeInTheDocument();
	});
});
