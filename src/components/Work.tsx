import { useState } from "react";
import "../App.css";
import scoopit1 from "../assets/images/scoopit1.png";
import scoopit2 from "../assets/images/scoopit2.png";

function Work() {
  return (
    <div className="work-section">
      <h4>WORK</h4>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
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
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                In this game, you take control of an ice cream cone and embark
                on a quest to collect delectable ice cream scoops while avoiding
                pesky fruits. The game features straightforward mechanics and a
                clear objective.
              </p>
              <img
                src={scoopit1}
                alt="Scoop it Game Initial Menu"
                className="work-images"
              />
              <img src={scoopit2} alt="Scoop it Game" className="work-images" />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
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
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Catering to board game enthusiasts, this app offers a curated
                list of popular games with detailed descriptions. Users can
                edit, delete, or add games, search by name, receive random game
                suggestions, roll dice, and even take a personalized test to
                find their perfect match for game nights!
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
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
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                A comprehensive Wedding Organizer designed to simplify planning
                your perfect day. It offers powerful tools to empower users
                through streamlined processes, allowing more time to enjoy the
                enchanting moments.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
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
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>An audiovisual producer's portfolio</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
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
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>My personal portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
