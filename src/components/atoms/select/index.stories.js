import { Select } from '../..'

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  options: [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
    { label: 'Four', value: 4 },
    { label: 'Five', value: 5 },
  ]
}
