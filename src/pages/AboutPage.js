import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import image from "../wer-01.png";
// import face from "./sadz.png";

function AboutPage(props) {
  return (
    <div className="backg" style={{ backgroundImage: `url(${image}` }}>
      <Hero className="justify-content-center" title={props.title} />

      <Content className="d-flex justify-content-center">
        {/* <Row className="justify-content-md-center">
          <img className="face " src={face} />
        </Row> */}
        {/* <div style="text-align: center;"> */}
        {/* <img className="face" src={face} /> */}
        {/* </div> */}

        <p>
          Hi, I’m Sadhana, a passionate graphic and UX/UI designer from
          Bengaluru, India, currently pursuing my bachelor's degree in Computer
          Science and Engineering from PES University (South Campus).
        </p>

        <p>
          I was introduced to the world of design by a happy accident while I
          was volunteering for a college club and ended up on the design team.
          It did not take long for me to find my passion in this field and I
          found myself wanting to dive deeper into it.
        </p>
        <p>
          Design, to me, is something that makes this world a better place. I
          strongly believe that design is not how it looks, it’s about how it
          works. I draw inspiration from nature and it motivates me to spread
          cheer and positivity through my designs.
        </p>
        <p>
          To gain a better perspective on web and mobile interfaces, I have also
          worked on my web development coding skills, especially front-end.
        </p>
        <p>
          My pursuit of design has opened up a lot of avenues for me, from
          working as a part of the design team to becoming the head of the
          design department for IEEE Student Chapter of our college and for
          our college's flagship techno-cultural fest. You can check out my
          creatives{" "}
          <a
            href="https://www.behance.net/sadhanalokesh?isa0=1#"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
