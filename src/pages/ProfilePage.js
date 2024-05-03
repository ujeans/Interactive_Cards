import { Helmet } from "react-helmet-async";
// components
import Layout from "../components/common/Layout";
import Profile from "../containers/profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Ujin Hong (홍유진)</title>
      </Helmet>

      <Layout title="Ujin Hong (홍유진)">
        <Profile />
      </Layout>
    </>
  );
};

export default ProfilePage;
