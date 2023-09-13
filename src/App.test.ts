import { expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import App from "./App.vue";

test("renders the example page", async () => {
  render(App);
  expect(await screen.findByText(/.*Vite.*/)).toBeVisible();
});
