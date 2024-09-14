import NavBar from "@/components/Navbar";
import Heropage from "./Heropage";

const Homepage = () => {
  return (
    <>
      <NavBar isLoggedIn={true} />
      <Heropage />
    </>
  );
};

export default Homepage;
