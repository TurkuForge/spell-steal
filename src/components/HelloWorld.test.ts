import { render, fireEvent } from "@testing-library/vue";
import Component from "@/components/HelloWorld.vue";

test("increments value on click", async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(Component, { props: { msg: "Hello World!" } });

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText("count is: 0");

  const button = getByText("count is:", { exact: false });

  // Dispatch a native click event to our button element.
  await fireEvent.click(button);
  await fireEvent.click(button);

  getByText("count is: 2");
});
