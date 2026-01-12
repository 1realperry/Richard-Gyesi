import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Campaigns from './components/Campaigns';
import Experience from './components/Experience';
import Referees from './components/Referees';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Campaigns />
        <Experience />
        <Referees />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
