import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Diego Arevalo </span>
            from <span className="purple"> Chalatenango, El Salvador.</span>
            <br />
            I am currently employed as a software developer at Hospy.
            <br />
            I have a degree in Computer Science from UMOAR.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Walk
            </li>
            <li className="about-activity">
              <ImPointRight /> Read
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch tennis and soccer matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Discipline is a good way to reach all your goals!"{" "}
          </p>
          <footer className="blockquote-footer">Diego Arevalo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
