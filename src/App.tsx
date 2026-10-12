import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
