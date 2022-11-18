import { Icon } from '../..'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    },
    type: {
      options: ['dashboard', 'expand_more', 'done', 'close', 'menu'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = { type: 'dashboard' }

