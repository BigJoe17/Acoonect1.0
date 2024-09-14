import Homepage from "./CustomPages/Homepage";
import Postpage from "./CustomPages/Postpage";
import NavBar from "./components/Navbar";
import Thirdpage from "./CustomPages/ThirdPage";
import Signup from "./CustomPages/authpages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Onboarding from "./CustomPages/authpages/Onboarding";
import Login from "./CustomPages/authpages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar isLoggedIn={false} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post" element={<Postpage />} />
        <Route path="/user" element={<Thirdpage />} />
        <Route path="/login" element={<Thirdpage />} />
        <Route path="/server" element={<Thirdpage />} />
        <Route path="/server" element={<Thirdpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
