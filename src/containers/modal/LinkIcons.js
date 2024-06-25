// components
import Container from "../../components/modal/LinkIcons/Container";
import Icon from "../../components/modal/LinkIcons/Icon";
// assets
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import linkedin from "../../assets/linkedin.svg";

const LinkIcons = ({ selectedCard }) => {
  return (
    <Container>
      <a href={selectedCard.githubLink}>
        <Icon src={github} alt="github" delay="0.5s" />
      </a>
      <a href="mailto:dbwlsxkal95@gmail.com">
        <Icon src={gmail} alt="gmail" delay="0.7s" />
      </a>
      <a href="https://www.linkedin.com/in/%EC%9C%A0%EC%A7%84-%ED%99%8D-15097b304/">
        <Icon src={linkedin} alt="linked-in" delay="0.9s" />
      </a>
    </Container>
  );
};

export default LinkIcons;
