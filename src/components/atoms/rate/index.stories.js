import { Rate } from '../..'

export default {
  title: 'Atoms/Rate',
  component: Rate,
  argTypes: {
    scale: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    },
    value: {
      options: [0, 1, 2, 3, 4, 5],
      control: { type: 'inline-radio' }
    },
    onChange: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args) => <Rate {...args} />

export const Primary = Template.bind({})
Primary.args = {}
