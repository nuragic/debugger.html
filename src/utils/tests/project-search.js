import { searchSource } from "../project-search";

const text = `
  function foo() {
    foo();
  }
`;

describe("project search", () => {
  it("simple", () => {
    const source = {
      text,
      loading: false,
      id: "bar.js",
      url: "http://example.com/foo/bar.js"
    };

    const matches = searchSource(source, "foo");
    expect(matches).toMatchSnapshot();
  });
});
