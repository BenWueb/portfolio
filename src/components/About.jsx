import about from "../assets/1203141756-PhotoRoom_edited.jpg";

function About() {
  return (
    <div className="about-me">
      <section className="about-me" id="about">
        <h2 className="heading about-section-header">About</h2>
        <div className="about-me-container">
          <div className="about-text-container">
            <p>
              I am a freelance web developer based out of Minneapolis,
              Minnesota. As a full stack developer, I thrive on challenges and
              problem-solving. I love taking on complex projects and finding
              creative solutions to make them work seamlessly. Whether it's a
              responsive design, a custom web application, or an e-commerce
              platform, I'm always up for a new challenge. <br /> <br />
              For me, the most rewarding part of being a web developer is seeing
              the impact that my work has on people's lives. I'm constantly
              inspired by the way that technology can connect people, improve
              businesses, and make the world a better place.
            </p>
          </div>
          <div className="about-image">
            <img src={about} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
