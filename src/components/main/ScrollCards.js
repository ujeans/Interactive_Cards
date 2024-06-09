import { useNavigate } from "react-router-dom";
// css
import "../../css/scrollCards.css";
// components
import Card from "../card/Card";
import { useState } from "react";

const CityOnly = ({ city }) => (
  <div className="contents">
    <div className="city">{city}</div>
  </div>
);

const ScrollCards = ({ cards, cardText }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onClickCard = (projectName, themeColor) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/project/${projectName}`, { state: { themeColor } });
    }, 800); // 애니메이션 시간과 일치하도록 설정
  };
  return (
    <main>
      <div className="cards">
        {cards.map((c, index) => (
          <a
            href="#"
            key={index}
            className="stack"
            onClick={() =>
              onClickCard(cardText[c].name, cardText[c].themeColor)
            }
          >
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
  );
};

export default ScrollCards;
