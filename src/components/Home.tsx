import "../App.css";
import Greetings from "./Greetings";
import About from "./About";
import Skills from "./Skills";

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
    </div>
  );
}

export default Home;
