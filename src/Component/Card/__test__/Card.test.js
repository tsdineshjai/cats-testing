import { render, screen } from "@testing-library/react";
import Card from "../Card";
import userEvent from "@testing-library/user-event";

const cardProps = {
	name: "sweeney",
	phone: "111-111-121",
	email: "sydney_sweeney@hotmail.com",
	image: {
		url: "https://bit.ly/3B9JEMH",
		alt: "sweet cat",
	},
	favoured: false,
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

	test("checking the image of the cat", () => {
		render(<Card {...cardProps} />);
		expect(screen.getByAltText(/sweet cat/i).src).toBe(cardProps.image.url);
	});

	//writing tests to find the filled heart  or outlined heart shaped button

	test("a filled heart", () => {
		render(<Card {...cardProps} favoured={true} />);
		//passing all the props and passing favoured prop to update whatever value we want to pass

		expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
		expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
	});
	test("a outlined heart", () => {
		render(<Card {...cardProps} favoured={false} />);
		//passing all the props and passing favoured prop to update whatever value we want to pass

		expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
		expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
	});

	test("toggling of outlined and filled hear", () => {
		render(<Card {...cardProps} />);
		userEvent.click(screen.getByRole("button"));
		expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
		expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();

		userEvent.click(screen.getByRole("button"));
		expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
		expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
	});
});
