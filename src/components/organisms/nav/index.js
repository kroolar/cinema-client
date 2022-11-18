import { Card, Icon, Logo } from '../..'

const Nav = () => {
  const menu = [
    { icon: 'dashboard',    label: 'Dashboard', link: '/' },
    { icon: 'movie',        label: 'Movies',    link: '/' },
    { icon: 'meeting_room', label: 'Rooms',     link: '/' },
    { icon: 'tv',           label: 'Shows',     link: '/' },
    { icon: 'settings',     label: 'Settings',  link: '/' }
  ]

  return(
    <Card className="flex-col w-64 mr-10">
      <Logo size="sm" />

      <div className="mt-48 mb-72">
        {menu.map(({ icon, label }) => (
          <div className="flex items-center mb-4 px-3 h-10 rounded cursor-pointer hover:bg-gray-800 hover:text-white">
            <Icon size="sm" type={icon} />
            <div className="text-xl ml-2">{label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center mb-4 px-3 h-10 rounded cursor-pointer hover:bg-gray-800 hover:text-white">
        <Icon size="sm" type="logout" />
        <div className="text-xl ml-2">Logout</div>
      </div>
    </Card>
  )
}
export default Nav
