import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { FontIsBlack } from "./Example.stories"; // stories에서 가져올 수 있습니다

it("Example 컴포넌트는 'This is Component Example!' 텍스트를 포함해야 합니다", async () => {
  render(<FontIsBlack />);

  screen.getByText("This is Component Example!");
});
