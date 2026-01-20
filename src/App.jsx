import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero"
import WhyThisMatters from "./components/WhyThisMatters";
import HowItWorks from "./components/HowItWorks";
import WhoThisIsFor from "./components/WhoThisIsFor";
import TrustSection from "./components/TrustSection";
import FinalCTA from "./components/FinalCta";
import Footer from "./components/Footer";



function App() {
  return (
    <>

       <Header />
       <Hero/>
       <WhyThisMatters/>
       <HowItWorks/>
       <WhoThisIsFor/>
       <TrustSection/>
      <FinalCTA/>
      <Footer/>
      
    </>
  );
}

export default App;