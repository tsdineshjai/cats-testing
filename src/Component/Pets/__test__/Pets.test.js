import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import Pets from "../Pets";
import { rest } from "msw";
import { setupServer } from "msw/node";
import catsMock from "../../../mocks/cats.json";

const server = setupServer(
	rest.get("http://localhost:4000/cats", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(catsMock));
	})
);

beforeAll(() => server.listen()); //server starts listening
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); //stops the server from listening

describe("Pets", () => {
	test("Pets component should render five card", async () => {
		render(<Pets />);
		const cardComponentsNumber = await screen.findAllByRole("article");
		expect(cardComponentsNumber.length).toBe(5);
	});
});
