import Image from "next/image";
import StoryData from "../../data/StoryData.json";
const AboutSection = () => {
  return (
    <section className="FirstSection">
      <h1>Un métier passion</h1>
      <div className="contentContainer">
        <Image
          src={"/ImageHistoire1.jpg"}
          alt="image histoire1"
          width={5550}
          height={4523}
        />
        <div className="textsContainer">
          {StoryData.map(({ undertitle, text }, i) => {
            return (
              <div key={i} className="paragraph">
                <p>{undertitle}</p>
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
