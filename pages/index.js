import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import BrandTwo from "../components/BrandTwo";
import Symptomps from "../components/Symptomps";
import AboutFour from "../components/AboutFour";
import AboutFive from "../components/AboutFive";
import Video from "../components/Video";

import Testimonial from "../components/Testimonial";
import CallToActionTwo from "../components/CallToActionTwo";
import CallToAction from "../components/CallToAction";

const HomeTwo = () => (
  <Layout pageTitle="Top Trending Info">
    <NavTwo />

    <Slider />
    <BrandTwo />
    <Symptomps />
    <AboutFour />
    <AboutFive />
    <Video />

    <CallToActionTwo />
    <Testimonial />

    <CallToAction />

    <Footer />
  </Layout>
);

export default HomeTwo;
