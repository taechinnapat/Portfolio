import './App.css';
import About from './components/About'
import Hero from './components/Hero'
import { Navbar } from "./components/Navbar"
import Skill from './Components/skill'
import Project from './Components/Project'
import Contact from './Components/Contact';
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
     
  )
}