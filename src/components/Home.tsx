import "../App.css";
import Greetings from "./Greetings";
import About from "./About";

function Home() {
  return (
    <div>
      <section>
        <Greetings></Greetings>
      </section>
      <section>
        <About></About>
      </section>
    </div>
  );
}

export default Home;
