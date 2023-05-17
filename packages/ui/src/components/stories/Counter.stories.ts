import type { Meta, StoryObj } from "@storybook/vue";
import Counter from "../Counter.vue";

type CounterInstance = InstanceType<typeof Counter>;
const meta: Meta<CounterInstance> = {
  title: "Counter",
  component: Counter,
};
export default meta;

export const Default: StoryObj<CounterInstance> = {
  render() {
    return {
      components: { Counter },
      template: String.raw`<Counter />`,
    };
  },
};
