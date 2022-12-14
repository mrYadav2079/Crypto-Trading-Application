import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Icon from ".";
import dashboard from "../../../assets/icons/chevron-down.svg";
export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    src: {
      control: "text",
      description: "The source of the icon",
      defaultValue: dashboard,
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: dashboard,
  width: "12.73px",
  height: "7.8px",
};
