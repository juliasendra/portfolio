import "../App.css";
import profilepic from "../assets/images/profilepic.png";
function About() {
  return (
    <div className="about-container">
      <div>
        <h4>ABOUT</h4>
        <h2>Who is Júlia?</h2>
        <div className="about-description">
          <img
            src={profilepic}
            alt="Júlia Sendra's Profile Picture"
            className="profile-pic"
          />
          <div className="about-text">
            <h3>A Full-Stack Developer with a background in communication</h3>
            <p>
              After a few years in the world of communication, I have decided to
              face a new challenge and make the leap into the ‘tech’ world,
              since it has always generated a lot of interest in me 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
