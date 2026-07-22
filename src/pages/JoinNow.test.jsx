import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import JoinNow from "./JoinNow";

describe("JoinNow", () => {
  it("shows the ad source from the query string", () => {
    render(
      <MemoryRouter initialEntries={["/join-now?source=facebook-ad"]}>
        <Routes>
          <Route path="/join-now" element={<JoinNow />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/facebook ad/i)).toBeInTheDocument();
  });
});
