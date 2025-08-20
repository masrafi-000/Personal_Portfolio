import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MyProjects from "./sections/MyProjects";
import Navbar from "./sections/Navbar";
import TechnicalProficiency from "./sections/TechnicalProficiency";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
