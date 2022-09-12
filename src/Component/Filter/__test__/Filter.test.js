/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "../Filter";

beforeEach(() => render(<Filter filters={{}} setFilters={() => {}} />));

describe("Filter", () => {
	test("checking values for favoriute", () => {
		const select = screen.getByLabelText(/favourite/i);
		expect(select.value).toBe("any");

		userEvent.selectOptions(select, "favoured");
		expect(select.value).toBe("favoured");

		userEvent.selectOptions(select, "non favoured");
		expect(select.value).toBe("non favoured");
	});
	test("checking values for gender", () => {
		const select = screen.getByLabelText(/gender/i);
		expect(select.value).toBe("any");

		userEvent.selectOptions(select, "male");
		expect(select.value).toBe("male");

		userEvent.selectOptions(select, "female");
		expect(select.value).toBe("female");
	});
});
