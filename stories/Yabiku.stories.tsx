// Yabiku.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Yabiku } from "./Yabiku";

const meta: Meta<typeof Yabiku> = {
  title: "Components/Yabiku",
  component: Yabiku,
};

export default meta;

type Story = StoryObj<typeof Yabiku>;

export const CustomFooter: Story = {
  args: {
    children: (
      <div>
        Built with <strong>Storybook</strong>
        <p>test</p>
      </div>
    ),
  },
};
