import { Logo } from '../..'

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = {}
