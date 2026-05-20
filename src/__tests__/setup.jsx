import { afterEach, beforeEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

global.baseToys = [
  { id: 1, name: "Woody", image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Woody_Pride.png", likes: 5 },
  { id: 2, name: "Buzz Lightyear", image: "https://upload.wikimedia.org/wikipedia/en/w/wa/Buzz_Lightyear_from_Toy_Story.JPG", likes: 10 },
  { id: 3, name: "Rex", image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Rex_from_Toy_Story.png", likes: 3 },
];

global.alternateToys = [
  { id: 4, name: "Slinky", image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Rex_from_Toy_Story.png", likes: 1 },
  { id: 5, name: "Mr. Potato Head", image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Rex_from_Toy_Story.png", likes: 2 },
];

global.setFetchResponse = (data) => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    )
  );
};

beforeEach(() => {
  global.setFetchResponse(global.baseToys);
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});