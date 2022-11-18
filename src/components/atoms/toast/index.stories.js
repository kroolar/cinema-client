import { Toast } from '../..'

export default {
  title: 'Atoms/Toast',
  component: Toast,
  argTypes: {
    type: {
      options: ['error', 'info', 'success', 'warning'],
      control: { type: 'inline-radio' }
    },
  }
}

const Template = (args) => <Toast {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Description of your toast!'
}
