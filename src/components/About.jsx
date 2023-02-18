import about from "../assets/1203141756-PhotoRoom_edited.jpg";

function About() {
  return (
    <>
      <section className="about-me">
        <h4>About Me</h4>
        <div className="about-me-container">
          <div className="about-text-container">
            <p>
              As a full stack developer, I thrive on challenges and
              problem-solving. I love taking on complex projects and finding
              creative solutions to make them work seamlessly. Whether it's a
              responsive design, a custom web application, or an e-commerce
              platform, I'm always up for a new challenge. <br /> <br />
              But for me, the most rewarding part of being a web developer is
              seeing the impact that my work has on people's lives. I'm
              constantly inspired by the way that technology can connect people,
              improve businesses, and make the world a better place. <br />{" "}
              <br />
              If you're interested in collaborating on a web development
              project, or if you just want to learn more about my work, feel
              free to get in touch. I'm always happy to connect with fellow
              developers and potential clients. <br /> <br />
            </p>
          </div>
          <div className="about-image">
            <img src={about} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
