import { Error } from '../..'

export default {
  title: 'Atoms/Error',
  component: Error,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Error {...args} />

export const Primary = Template.bind({})
Primary.args = { text: 'Name field cannot be empty' }
