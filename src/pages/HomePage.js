import { Helmet } from "react-helmet-async";
// containers
import HomeWrapper from "../containers/home/HomeWrapper";
// components
import Profile from "../components/home/Profile";
import Typography from "../components/home/Typography";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ujinLog</title>
      </Helmet>

      <HomeWrapper>
        <Profile />
        <Typography />
      </HomeWrapper>
    </>
  );
};

export default HomePage;
