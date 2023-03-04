import Guide from '../components/Guide'
import Hero from "../components/Hero";
import Companies from "../components/Companies"; 
import Properties from "../components/Properties";
import Details from "../components/Details";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";


function HomePage() {
    return ( 
        <>
            <Hero />
            <Companies />
            <Guide />
            <Properties />
            <Details />
            <GetStarted />
            <Footer />
        </>
     );
}

export default HomePage;