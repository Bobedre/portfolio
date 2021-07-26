import Github from "./Github";
import Projects from "./Projects";
import Contact from "./Contact";

function AboutMe() {
    return (
      <div className="AboutMe">
        <h1>SKAL VÆK</h1>
        <h1>JEG HEDDER SUT</h1>
        <Projects/>
        <Contact/>
        <Github/>
        
      </div>
    );
  }
  
  export default AboutMe;