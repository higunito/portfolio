import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const Main = () => {
  return (
    <main className="pt-24">
      <About />
      <Experience />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
  );
};

export default Main;