import "./App.css";
import Courses from "./components/Courses/Courses";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Courses />
      </main>
    </div>
  );
}

export default App;
