import Header from "../components/Header";
import Hero from "../components/Hero";
import AppFeatures from "../components/AppFeatures";
import Instructions from "../components/Instructions";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppFeatures />
        <Instructions />
        <Features />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default Home;
