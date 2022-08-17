import "./App.css";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="upper">
          <Search />
          <CreateCourse />
        </div>
        <Courses />
      </main>
    </div>
  );
}

export default App;
