import "../App.css";
import Greetings from "./Greetings";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <section>
        <Greetings></Greetings>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <Skills></Skills>
      </section>
      <section>
        <Work></Work>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </div>
  );
}

export default Home;
