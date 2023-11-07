import "./index.css";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import About from "./components/About";
import Stocks from "./components/Stocks";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Cooperation from "./components/Cooperation";
import Invited from "./components/Invited";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App mt-12">
        <Header />
        <WelcomePage />
        <About />
        <Stocks />
        <Reviews />
        <Faq />
        <Cooperation />
        <Invited />
        <Footer />
    </div>
  );
}

export default App;
