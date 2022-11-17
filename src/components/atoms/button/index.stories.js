import { Button } from '../..'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { text: 'Buttons', size: 'md' }
