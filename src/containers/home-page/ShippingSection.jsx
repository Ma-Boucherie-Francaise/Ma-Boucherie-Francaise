import Link from "next/link";
import BlockData from "../../data/BlockData.json";

const ShippingSection = () => {
  return (
    <section className="ThirdSection">
      <div className="title">
        <h1>
          Tradition, savoir-faire et praticité : <br /> votre boucherie comme
          vous l’aimez !
        </h1>
      </div>
      <div className="blocksContainer">
        {BlockData.map(({ name, paragraph, href, button }, i) => {
          return (
            <div key={i} className="block">
              <h2>{name}</h2>
              <p>{paragraph}</p>
              {typeof button !== "string" ? (
                <div className="btns-container">
                  {button.map(({ name, btnHref }, index) => (
                    <Link key={index} className="btn" href={btnHref}>
                      {name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link className="btn" href={href}>
                  {button}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShippingSection;
