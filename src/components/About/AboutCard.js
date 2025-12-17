import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hi everyone! 👋
           <br />
           <br />

          I’m 
          <span className="purple"> Diwa Arsyad Atthoriq </span>
          from Indonesia. I recently graduated with a 
          <span className="purple"> Diploma in Information Technology </span>
          from the
          <span className="purple"> State Polytechnic of Malang </span>
          , where I discovered my passion for game development.
          <br />
          <br />
          I love combining
          <span className="purple"> creativity and technology </span>  
          to craft engaging and meaningful 
          <span className="purple"> interactive experiences. </span> 
          My main tools are 
          <span className="purple"> Unity and C# </span>
          , and I enjoy exploring 
          <span className="purple"> VR and interactive storytelling </span> — anything that lets players feel truly immersed.
          Along the way, I’ve also earned several certifications, including 
          <span className="purple"> Unity Certified VR Developer (Certiport), BNSP System Analyst, </span>
          and completed online courses in 
          <span className="purple"> Golang, Unreal Engine, and C#. </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It is what it is!"{" "}
          </p>
          <footer className="blockquote-footer">Diwa Oliq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
