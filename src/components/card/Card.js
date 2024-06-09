// css
import "../../css/card.css";

const Card = ({ strong, name, position, email, phone, address, city }) => {
  return (
    <div className="contents">
      <h2>
        <strong>ULog </strong>
        {strong}
      </h2>
      <h3>{name}</h3>
      <div>{position}</div>
      <br />
      <span>✉️</span>
      {email}
      <br />
      <span>📞</span>
      {phone}
      <br />
      <br />
      <div>{address}</div>
      <div>{city}</div>
    </div>
  );
};

export default Card;
