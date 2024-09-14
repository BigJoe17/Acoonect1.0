import Homepage from "./CustomPages/Homepage";
import Postpage from "./CustomPages/Postpage";
import ProfilePage from "./CustomPages/Profilepage";
import NavBar from "./components/Navbar";
import Thirdpage from "./CustomPages/ThirdPage";
import Signup from "./CustomPages/authpages/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Onboarding from "./CustomPages/authpages/Onboarding";
import Login from "./CustomPages/authpages/Login";
import Profile from "./CustomPages/Profiles";

const App = () => {
  const location = useLocation();

  const needsNavbar =
    !location.pathname.includes("login") &&
    !location.pathname.includes("signup");
  return (
    <>
      {needsNavbar && <NavBar isLoggedIn={false} />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post" element={<Postpage />} />
        <Route path="/user" element={<Thirdpage />} />
        <Route path="/profiletwo" element={<ProfilePage />} />
        <Route path="/server" element={<Thirdpage />} />
        <Route path="/server" element={<Thirdpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {needsNavbar && <Footer />}
    </>
  );
};

export default App;
