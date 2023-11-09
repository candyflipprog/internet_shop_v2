import About from "./About";
import Cooperation from "./Cooperation";
import Faq from "./Faq";
import Footer from "./Footer";
import Header from "./Header";
import Invited from "./Invited";
import Reviews from "./Reviews";
import Stocks from "./Stocks";
import WelcomePage from "./WelcomePage";

const NavBar = () => {
    const handleSearch = (searchValue: string) => {
        console.log("Search value:", searchValue);
    };

    return (
        <div>
            <Header onSearch={handleSearch} />
            <WelcomePage />
            <About />
            <Stocks />
            <Reviews />
            <Faq />
            <Cooperation />
            <Invited />
            <Footer />
        </div>
    )
};

export default NavBar;
