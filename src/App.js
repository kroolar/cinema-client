import {
  Header,
  Movies,
  Nav,
  Profile,
  Ranking
} from './components'

const App = () => {
  return (
    <div className="flex p-10 bg-gray-100 h-screen">
      <Nav />

      <div className="flex flex-col mr-10 flex-1">
        <Header />
        <Movies />
      </div>

      <div className="w-80">
        <Profile />
        <Ranking />
      </div>
    </div>
  );
}

export default App;
