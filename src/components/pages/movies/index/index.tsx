import React from 'react'
import { Card, Icon, Label, Input, Select, Button, Table } from "../../.."

const Movies = () => {
  const actions = (
    <div className="flex items-center justify-end">
      <Icon size="2xs" type="edit" />
      <Icon className="mx-1" size="2xs" type="delete" />
    </div>
  )

  return (
    <div className="flex items-start">
      <Card className="flex-col h-full mr-10 w-2/3">
        <Table
          headers={['Title', 'Category', 'Length', '']}
          rows={[
            ['Pulp Fiction', 'Thriller', '123', actions],
            ['Pulp Fiction', 'Thriller', '123', actions],
            ['Pulp Fiction', 'Thriller', '123', actions],
            ['Pulp Fiction', 'Thriller', '123', actions],
            ['Pulp Fiction', 'Thriller', '123', actions],
            ['Pulp Fiction', 'Thriller', '123', actions],
            ['Pulp Fiction', 'Thriller', '123', actions]
          ]}
        />
      </Card>

      <Card className="w-1/3">
        <div className="flex flex-col mb-2">
          <Label required text="Name" />
          <Input />
        </div>
        
        <div className="mb-2">
          <Label required text="Category" />
          <Select
            options={[{label: 'asd', value: 'asd'}]}
          />
        </div>

        <div className="flex flex-col mb-6">
          <Label required text="Name" />
          <Input />
        </div>

        <Button className="w-full" text="Create" />
      </Card>
    </div>
  )
}

export default Movies