import {
  Header,
  Movies,
  Nav,
  Profile,
  Ranking
} from './components'

const App = () => {
  return (
    <div className="app">
      <Nav />

      <div className="app__main">
        <Header />
        <Movies />
      </div>

      <div className="app__aside">
        <Profile />
        <Ranking />
      </div>
    </div>
  );
}

export default App;
