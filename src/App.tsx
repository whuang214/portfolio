export default function App() {
  
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white sticky top-0 z-10">
        <button 
          onClick={() => scrollToSection('home')}
          className="mr-4 hover:underline"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="mr-4 hover:underline"
        >
          About Me
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="mr-4 hover:underline"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="hover:underline"
        >
          Contact
        </button>
      </nav>
      
      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-blue-400 text-white">
        <div>
          <h1 className="text-5xl mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">Introductory text or a tagline here.</p>
        </div>
      </section>
      
      {/* About Me Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-white p-4">
        <div>
          <h2 className="text-4xl mb-4">About Me</h2>
          <p>A brief bio and your background.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-200 p-4">
        <div>
          <h2 className="text-4xl mb-4">Projects</h2>
          {/* You can map through an array of projects and display them here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center bg-white p-4">
        <div>
          <h2 className="text-4xl mb-4">Contact</h2>
          <p>Ways to get in touch or a contact form.</p>
        </div>
      </section>

    </div>
  );
}
