import { Helmet } from "react-helmet-async";
// components
import Header from "../components/main/Header";
// pages
import ScrollCards from "../containers/main/ScrollCards";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>ULog - Main</title>
      </Helmet>

      <Header />
      <ScrollCards />
    </>
  );
};

export default MainPage;
