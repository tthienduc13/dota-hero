import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Output from "./pages/Output";
import { useState } from "react";
function App() {
  const [subLink, setSubLink] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/input"
          element={<Input setSubLink={setSubLink} />}
        ></Route>
        <Route path="/output" element={<Output subLink={subLink} />}></Route>
      </Routes>
    </>
  );
}

export default App;
