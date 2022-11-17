import { Card } from '../..'

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Children', size: 'md' }
