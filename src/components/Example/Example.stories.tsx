import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Example } from "./Example";

export default {
  title: "Example/Example",
  component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const FontIsBlack = Template.bind({});
FontIsBlack.args = {
  color: "black",
};
export const FontIsRed = Template.bind({});
FontIsRed.args = {
  color: "red",
};
export const FontIsBlue = Template.bind({});
FontIsBlue.args = {
  color: "blue",
};
