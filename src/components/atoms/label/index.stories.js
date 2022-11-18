import { Label } from '../..'

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    },
    required: { control: 'boolean' }
  }
}

const Template = (args) => <Label {...args} />

export const Primary = Template.bind({})
Primary.args = { text: 'Label' }
