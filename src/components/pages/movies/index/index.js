import { Card, Icon, Rate, Label, Input, Select, Button } from "../../.."

const Movies = () => (
  <div className="flex items-start">
  <Card className="flex-col h-full mr-10 w-2/3">
    <table className="rounded p-2">
    <thead className="rounded">
      <tr className="bg-gray-800 text-white">
        <th className="p-2 px-3 leading-none font-medium text-left">Name</th>
        <th className="p-2 px-3 leading-none font-medium text-left">Length</th>
        <th className="p-2 px-3 leading-none font-medium text-left">Rate</th>
        <th className="p-2 px-3 leading-none font-medium text-left"></th>
      </tr>
    </thead>

    <tbody>
      <tr className="">
        <td className="p-2 px-3 text-sm h-10 w-1/3">Pulp Fiction</td>
        <td className="p-2 px-3 text-sm h-10 w-1/3">127</td>
        <td className="p-2 px-3 text-sm h-10 w-1/3">
          <Rate value={4} />
        </td>
        <td className="h-10 flex">
          <Icon className="w-8 cursor-pointer" size="sm" type="edit" />
          <Icon className="w-8 cursor-pointer" size="sm" type="delete" />
        </td>
      </tr>

      <tr className="">
        <td className="p-2 bg-gray-50 text-sm px-3">1</td>
        <td className="p-2 bg-gray-50 text-sm px-3">2</td>
        <td className="p-2 bg-gray-50 text-sm px-3">3</td>
      </tr>

      <tr className="">
        <td className="p-2 px-3 text-sm">1</td>
        <td className="p-2 px-3 text-sm">2</td>
        <td className="p-2 px-3 text-sm">3</td>
      </tr>

      <tr className="">
        <td className="p-2 bg-gray-50 text-sm px-3">1</td>
        <td className="p-2 bg-gray-50 text-sm px-3">2</td>
        <td className="p-2 bg-gray-50 text-sm px-3">3</td>
      </tr>
    </tbody>
  </table>
  </Card>

  <Card className="w-1/3">
    <div className="flex flex-col mb-2">
      <Label required text="Name" />
      <Input />
    </div>
    
    <div className="mb-6">
      <Label required text="Category" />
      <Select
        options={[{label: 'asd', value: 'asd'}]}
      />
    </div>

    <Button className="w-full" text="Create" />
  </Card>
</div>
)

export default Movies
