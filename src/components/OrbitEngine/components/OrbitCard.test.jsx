import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import OrbitEngineProvider from "../providers/OrbitEngineProvider";
import OrbitCard from "./OrbitCard";

function TestHarness({ label }) {
  return (
    <OrbitEngineProvider>
      <OrbitCard className="orbit-card">
        <span>{label}</span>
      </OrbitCard>
    </OrbitEngineProvider>
  );
}

const register = vi.fn();
const unregister = vi.fn();
const start = vi.fn();
const stop = vi.fn();
const engine = { register, unregister, start, stop };

vi.mock("../hooks/useOrbitEngine", () => ({
  default: () => engine,
}));

describe("OrbitCard", () => {
  beforeEach(() => {
    register.mockReset();
    unregister.mockReset();
    start.mockReset();
    stop.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("registers once, attaches the DOM node, and unregisters on unmount", () => {
    const { container, rerender, unmount } = render(
      <TestHarness label="Orbit item" />,
    );

    const card = container.querySelector(".orbit-card");

    expect(card).not.toBeNull();
    expect(register).toHaveBeenCalledTimes(1);
    expect(unregister).not.toHaveBeenCalled();

    const registeredObject = register.mock.calls[0][0];

    expect(registeredObject.element).toBe(card);
    expect(registeredObject.element).toBeInstanceOf(HTMLElement);

    rerender(<TestHarness label="Orbit item updated" />);

    expect(register).toHaveBeenCalledTimes(1);

    unmount();

    expect(unregister).toHaveBeenCalledTimes(1);
    expect(unregister.mock.calls[0][0]).toBe(registeredObject);
  });
});
