import "../App.css";
import scoopit1 from "../assets/images/scoopit1.png";
import scoopit2 from "../assets/images/scoopit2.png";
import boardgames1 from "../assets/images/boardgames1.png";
import boardgames2 from "../assets/images/boardgames2.png";
import idoplanner1 from "../assets/images/idoplanner1.png";
import idoplanner2 from "../assets/images/idoplanner2.png";
import idoplanner3 from "../assets/images/idoplanner3.png";


function Work() {
  return (
    <div className="work-section">
      <h4>WORK</h4>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Scoop it!
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                In this game, you take control of an ice cream cone and embark
                on a quest to collect delectable ice cream scoops while avoiding
                pesky fruits. The game features straightforward mechanics and a
                clear objective.
              </p>
              <div
                id="carouselScoopIt"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={scoopit1}
                      className="d-block w-100"
                      alt="Scoop it Game Initial Menu"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={scoopit2}
                      className="d-block w-100"
                      alt="Scoop it Game"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselScoopIt"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselScoopIt"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="work-btn">
                <button className="rounded-btn">View it here</button>
                <button className="rounded-btn">View GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Board Game App
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Catering to board game enthusiasts, this app offers a curated
                list of popular games with detailed descriptions. Users can
                edit, delete, or add games, search by name, receive random
                game suggestions, roll dice, and even take a personalized test
                to find their perfect match for game nights!
              </p>
              <div
                id="carouselBoardGames"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={boardgames1}
                      className="d-block w-100"
                      alt="Board Game 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={boardgames2}
                      className="d-block w-100"
                      alt="Board Game 2"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselBoardGames"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselBoardGames"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="work-btn">
                <button className="rounded-btn">View it here</button>
                <button className="rounded-btn">View GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              I do planner
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                A comprehensive Wedding Organizer designed to simplify planning
                your perfect day. It offers powerful tools to empower users
                through streamlined processes, allowing more time to enjoy the
                enchanting moments.
              </p>
              <div
                id="carouselIdoPlanner"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={idoplanner1}
                      className="d-block w-100"
                      alt="I do planner 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={idoplanner2}
                      className="d-block w-100"
                      alt="I do planner 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={idoplanner3}
                      className="d-block w-100"
                      alt="I do planner 3"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselIdoPlanner"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselIdoPlanner"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="work-btn">
                <button className="rounded-btn">View it here</button>
                <button className="rounded-btn">View GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              RCI Producciones
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>An audiovisual producer's portfolio</p>
              <div
                id="carouselRciProducciones"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={idoplanner1}
                      className="d-block w-100"
                      alt="RCI Producciones 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={idoplanner2}
                      className="d-block w-100"
                      alt="RCI Producciones 2"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselRciProducciones"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselRciProducciones"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="work-btn">
                <button className="rounded-btn">View it here</button>
                <button className="rounded-btn">View GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Portfolio
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>My personal portfolio, the one you are currently seeing.</p>
              <div className="work-btn">
                <button className="rounded-btn">View it here</button>
                <button className="rounded-btn">View GitHub Repo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Work;
