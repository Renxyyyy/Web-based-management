import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Render the dashboard title", async () => {
  it("should render");
  const dashboardTitle = screen.findByText(/admin dashboard/i);

  await expect(dashboardTitle).toBeInTheDocument();
});
