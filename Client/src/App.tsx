import Homepage from "./CustomPages/Homepage";
import Postpage from "./CustomPages/Postpage";
import Thirdpage from "./CustomPages/ThirdPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post" element={<Postpage />} />
        <Route path="/user" element={<Thirdpage />} />
        <Route path="/login" element={<Thirdpage />} />
        <Route path="/server" element={<Thirdpage />} />
        <Route path="/server" element={<Thirdpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
