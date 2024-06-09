// css
import "../../css/scrollCards.css";
// components
import Card from "../card/Card";

const CityOnly = ({ city }) => (
  <div className="contents">
    <div className="city">{city}</div>
  </div>
);

const ScrollCards = ({ cards, cardText }) => {
  return (
    // <div>

    <main>
      <div className="cards">
        {cards.map((c, index) => (
          <a href="#" key={index} className="stack">
            <div className="card top">
              <Card {...cardText[c]} />
            </div>
            <div className="card mid-top">
              <CityOnly city={cardText[c].city} />
            </div>
            <div className="card mid-bottom">
              <CityOnly city={cardText[c].city} />
            </div>
            <div className="card bottom">
              <CityOnly city={cardText[c].city} />
            </div>
            <div className="card shadow" />
          </a>
        ))}
      </div>
    </main>
    // </div>
  );
};

export default ScrollCards;
