import Icon from "../icon"

const Toast = () => (
  <div className="inline-flex w-96 absolute left-0 items-center bg-green-600 shadow text-white py-2 px-3 rounded">
    <Icon className="mr-4" type="check_circle" />

    <div className="flex-1 mr-4">
      <div className="leading-none">Description has been created kua</div>
    </div>

    <Icon className="text-sm rounded-full cursor-pointer duration-300 h-7 w-7 hover:bg-green-500" type="close" />
  </div>
)

export default Toast
