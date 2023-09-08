import NavBar from "./components/NavBar/index.tsx";
import Home from "./components/Home/index.tsx";
import About from "./components/About/index.tsx";
import Contact from "./components/Contact/index.tsx";
import Projects from "./components/Projects/index.tsx";

export default function App() {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar scrollToSection={scrollToSection} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
