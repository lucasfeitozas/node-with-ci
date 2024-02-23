const filterByTerm = require("../src/filterByTerm")

describe("Filter function", () => {
	// test stuff
	test("it should filter by a serch term (link)", () => {
		const input = [ 
		{id: 1, url: "https://www.url1.dev"},
		{id: 2, url: "https://www.url2.dev"},
		{id: 3, url: "https://www.link3.dev"}
		];

		const output = [{id: 3, url: "https://www.link3.dev" }];

		expect(filterByTerm(input, "link")).toEqual(output);

		expect(filterByTerm(input, "LINK")).toEqual(output);

	});

	test("it should fail if inputArr is empty", () => {
		expect(() => {filterByTerm([], "link")}).toThrow("inputArr cannot be empty");
	});

	test("it should fail if filterByTerm not receive params", () => {
		expect( () => {filterByTerm()} ).toThrow("searchTerm cannot be empty");
	});

});
