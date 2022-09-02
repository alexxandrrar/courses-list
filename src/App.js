import { Route, Routes } from "react-router-dom";
import "./App.css";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Courses />} />
          <Route exact path="/create-course" element={<CreateCourse />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
