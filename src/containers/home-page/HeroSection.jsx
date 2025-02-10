import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="FirstSection">
      <div className="image">
        <Image
          src={"/ImageAccueil.jpg"}
          alt="image accueil"
          width={5973}
          height={3924}
        />
      </div>
      <div className="title">
        <h1>Le goût de l&apos;excellence,</h1>
        <p>directement chez vous.</p>
      </div>
      <Link href="/produits" className="button">
        Découvrez nos viandes
      </Link>
      <div className="patternContainer">
        <Image
          src={"/PatternRouge4.png"}
          alt="patternRouge"
          width={1067}
          height={1067}
        />
        <Image
          src={"/PatternRouge4.png"}
          alt="patternRouge"
          width={1067}
          height={1067}
        />
      </div>
    </section>
  );
};

export default HeroSection;
