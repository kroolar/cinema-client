import { Input } from '../..'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    type: {
      options: ['text', 'number'],
      control: { type: 'inline-radio' }
    },
  }
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value: 'Sample Text'
}
