import { render, screen } from "@testing-library/react";

import Cards from "../Cards";
import cats from "../../../mocks/cats.json";

describe("Cards", () => {
	test("checking if 5 card components are getting rendered", () => {
		render(<Cards cats={cats} />);
		expect(screen.getAllByRole("article").length).toBe(5);
	});
});
