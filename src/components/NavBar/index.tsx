// must define the type of props being passed in
interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Home: React.FC<NavbarProps> = ({ scrollToSection }) => (
  <nav className="bg-blue-600 p-4 text-white sticky top-0 z-10">
    <button
      onClick={() => scrollToSection("home")}
      className="mr-4 hover:underline"
    >
      Home
    </button>
    <button
      onClick={() => scrollToSection("about")}
      className="mr-4 hover:underline"
    >
      About Me
    </button>
    <button
      onClick={() => scrollToSection("projects")}
      className="mr-4 hover:underline"
    >
      Projects
    </button>
    <button
      onClick={() => scrollToSection("contact")}
      className="hover:underline"
    >
      Contact
    </button>
  </nav>
);

export default Home;
