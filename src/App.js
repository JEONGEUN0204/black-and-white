import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Part1 from "./pages/Part1";
import Part2 from "./pages/Part2";

function App() {
  return (
    <Routes>
      <Route path="/part1" element={<Part1 />} />
      <Route path="/part2" element={<Part2 />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
