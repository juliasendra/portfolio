import "../App.css";
import Greetings from "./Greetings";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <section id="greetings">
        <Greetings></Greetings>
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="work">
        <Work></Work>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  );
}

export default Home;
