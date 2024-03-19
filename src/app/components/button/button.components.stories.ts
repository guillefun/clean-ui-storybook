import { StoryObj, Meta } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  args: {
    label: "Button"
  }
} as Meta<ButtonComponent>

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: "Button"
  }
}

export const Secondary: Story = {
  args: {
    label: "Secondary"
  }
}

export const Tertiary: Story = {
  args: {
    label: "Tertiary"
  }
}