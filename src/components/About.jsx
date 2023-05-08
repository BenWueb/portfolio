import about from "../assets/1203141756-PhotoRoom_edited.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="heading about-section-header">About</h2>
      <div className="about-me-container">
        <div className="about-text-container">
          <p>
            I am a freelance web developer based out of Minneapolis, Minnesota.
            I thrive on challenges and I love taking on complex projects and
            finding creative solutions to make them work seamlessly. <br />
            The most rewarding part of being a web developer is seeing the
            impact that my work has on people's lives. I'm constantly inspired
            by the way that technology can connect people, improve businesses,
            and make the world a better place.
          </p>
        </div>
        <div className="about-image">
          <img src={about} alt="" />
        </div>
      </div>
    </section>
  );
}
export default About;
