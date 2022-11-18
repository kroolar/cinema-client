import { Icon, Table } from '../..'

export default {
  title: 'Atoms/Table',
  component: Table,
  argTypes: {}
}

const Template = (args) => <Table {...args} />

export const Primary = Template.bind({})
Primary.args = {
  headers: ['Title', 'Category', 'Length', ''],
  rows: [
    ['Pulp Fiction', 'Thriller', 218],
    ['Joker', 'Horror', 189,
      <div className="flex justify-end">
        <Icon size="xs" type="edit" />
        <Icon className="mx-2" size="xs" type="delete" />
      </div>]
  ]
}

const data = {
  rows: [

  ],
  sizes: [2, 2, 2, 1]
}