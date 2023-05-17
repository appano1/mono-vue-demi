import type { Meta, StoryObj } from "@storybook/vue";
import Header from "../Header.vue";

type HeaderInstance = InstanceType<typeof Header>;
const meta: Meta<HeaderInstance> = {
  title: "Header",
  component: Header,
};
export default meta;

export const Default: StoryObj<HeaderInstance> = {
  render(_, { argTypes }) {
    return {
      components: { Header },
      props: Object.keys(argTypes),
      template: String.raw`<Header v-bind="$props" />`,
    };
  },
  args: {
    title: "Hello, world!",
  }
};
