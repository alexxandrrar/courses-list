import "./App.css";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Courses />
    </div>
  );
}

export default App;
