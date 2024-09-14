import NavBar from "@/components/Navbar";
import Heropage from "./Heropage";

const Homepage = () => {
  return (
    <>
      <NavBar isLoggedIn={false} />
      <Heropage />
    </>
  );
};

export default Homepage;
