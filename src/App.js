import './App.css';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from "./components/skills/Skills"
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Service from './components/service/Service'
import Education from './components/education/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
