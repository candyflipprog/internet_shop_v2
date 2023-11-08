import { HashRouter as Router, Route, Link } from 'react-router-dom'
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
import Catalog from './components/Catalog';


function App() {
    return (
        <Router>
            <div className="App mt-12">
                <Link to="/catalog"/>
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
        </Router>
    );
}

export default App;
