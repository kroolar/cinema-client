import { useState } from 'react';
import { Button, Card, Input, Label, Rate, Toast, Error, Select, Icon } from './components'

const App = () => {
  const [rate, setRate] = useState(4)
  const [text, setText] = useState('Kupa')
  const [select, setSelect] = useState()

  const options = [
    { label: 'Kupa', value: 'Kupa' },
    { label: 'Kupa2', value: 'Kupa2' },
    { label: 'Console', value: 'Log' },
  ]

  return (
    <div className="flex p-10 bg-gray-100 h-screen">
      <Card className="flex-col w-64 mr-10">
        <img src="/logo.png" />

        <div className="mt-48 h-full">
          <div className="flex items-center mb-4 px-3 h-10 rounded cursor-pointer hover:bg-gray-800 hover:text-white">
            <Icon type="dashboard" />
            <div className="text-xl ml-2">Dashboard</div>
          </div>

          <div className="flex items-center mb-4 bg-gray-800 rounded px-3 h-10 text-white">
            <Icon type="movie" />
            <div className="text-xl ml-2">Movies</div>
          </div>

          <div className="flex items-center mb-4 px-3 h-10 rounded cursor-pointer hover:bg-gray-800 hover:text-white">
            <Icon type="meeting_room" />
            <div className="text-xl ml-2">Rooms</div>
          </div>

          <div className="flex items-center mb-4 px-3 h-10 rounded cursor-pointer hover:bg-gray-800 hover:text-white">
            <Icon type="tv" />
            <div className="text-xl ml-2">Shows</div>
          </div>

          <div className="flex items-center mb-4 px-3 h-10 rounded cursor-pointer hover:bg-gray-800 hover:text-white">
            <Icon type="settings" />
            <div className="text-xl ml-2">Settings</div>
          </div>
        </div>

        <div className="flex items-center mb-4 px-3 h-10 rounded cursor-pointer hover:bg-gray-800 hover:text-white">
          <Icon type="logout" />
          <div className="text-xl ml-2">Logout</div>
        </div>
      </Card>

      <div className="flex flex-col mr-10 flex-1">
        <Card className="flex flex-row mb-10 h-64">
          <div className="w-40 h-40 bg-gray-800 rounded mr-10" />

          <div className="flex-1">
            <div className="leading-none text-4xl font-semibold">Pulp Fiction</div>
            <Rate className="-ml-1" value={3} />
            <div className="font-light mt-4">Lorem ipsum – tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, wzorowany na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji krojów pisma, kompozycji kolumny itp.</div>
          </div>
        </Card>

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
      </div>

      <div className="w-80">
        <Card className="mb-10">
          <div className="border-2 border-gray-800 h-32 w-32 mx-auto rounded overflow-hidden">
            <div className="rounded-full w-16 h-16 ml-7 mt-8 bg-gray-800" />
            <div className="rounded-full w-32 h-32  -mt-4 bg-gray-800" />
          </div>
        </Card>

        <Card>
          <h2 className="text-lg leading-none font-medium mb-4">Best Movies</h2>

          <div className="flex items-center mb-4">
            <div className="mr-4 w-10 h-10 bg-gray-800 rounded"></div>
            <div>
              <div className="leading-none">Pulp Fiction</div>
              <Rate className="-mt-1" value={5} />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="mr-4 w-10 h-10 bg-gray-800 rounded"></div>
            <div>
              <div className="leading-none">Pulp Fiction</div>
              <Rate className="-mt-1" value={5} />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="mr-4 w-10 h-10 bg-gray-800 rounded"></div>
            <div>
              <div className="leading-none">Pulp Fiction</div>
              <Rate className="-mt-1" value={5} />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="mr-4 w-10 h-10 bg-gray-800 rounded"></div>
            <div>
              <div className="leading-none">Pulp Fiction</div>
              <Rate className="-mt-1" value={5} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4 w-10 h-10 bg-gray-800 rounded"></div>
            <div>
              <div className="leading-none">Pulp Fiction</div>
              <Rate className="-mt-1" value={5} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
