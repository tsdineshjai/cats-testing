/* eslint-disable testing-library/no-render-in-setup */
import { screen, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pets from "../Pets";
import { rest } from "msw";
import { setupServer } from "msw/node";
import catsMock from "../../../mocks/cats.json";

const server = setupServer(
	rest.get("http://localhost:4000/cats", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(catsMock));
	})
);

beforeEach(() => render(<Pets />));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Pets", () => {
	test("Pets component should render five card", async () => {
		render(<Pets />);
		const cardComponentsNumber = await screen.findAllByRole("article");
		expect(cardComponentsNumber.length).toBe(5);
	});

	//integration testing

	test("should filter for male cats", async () => {
		const cards = await screen.findAllByRole("article");
		userEvent.selectOptions(screen.getByLabelText(/gender/i), "male");
		expect(screen.getAllByRole("article")).toStrictEqual([cards[1], cards[3]]);
	});
	test("should filter for female cats", async () => {
		const cards = await screen.findAllByRole("article");
		userEvent.selectOptions(screen.getByLabelText(/gender/i), "female");
		expect(screen.getAllByRole("article")).toStrictEqual([
			cards[0],
			cards[2],
			cards[4],
		]);
	});

	//the below test logic is first we find the cards, then click favored button on the cards we want
	//then we filtering using favored cats and expecting us same array of having favored cats.

	test("should fiter for favored cats", async () => {
		const cards = await screen.findAllByRole("article");

		//nesting queries; because we queried to get cards and now are querying within cards
		userEvent.click(within(cards[0]).getByRole("button"));
		userEvent.click(within(cards[3]).getByRole("button"));
		userEvent.selectOptions(screen.getByLabelText(/Favourite/i), "favoured");
		expect(screen.getAllByRole("article")).toStrictEqual([cards[0], cards[3]]);
	});
	test("should fiter for non favored cats", async () => {
		const cards = await screen.findAllByRole("article");

		//nesting queries; because we queried to get cards and now are querying within cards
		userEvent.click(within(cards[0]).getByRole("button"));
		userEvent.click(within(cards[3]).getByRole("button"));
		userEvent.selectOptions(
			screen.getByLabelText(/Favourite/i),
			"non favoured"
		);
		expect(screen.getAllByRole("article")).toStrictEqual([
			cards[1],
			cards[2],
			cards[4],
		]);
	});

	test("should filter for favored male cats", async () => {
		const cards = await screen.findAllByRole("article");

		userEvent.click(within(cards[0]).getByRole("button"));
		userEvent.click(within(cards[3]).getByRole("button"));

		userEvent.selectOptions(screen.getByLabelText(/favourite/i), "favoured");

		userEvent.selectOptions(screen.getByLabelText(/gender/i), "male");

		expect(screen.getAllByRole("article")).toStrictEqual([cards[3]]);
	});
});
