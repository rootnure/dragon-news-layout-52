import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import MarqueeComp from "../../components/MarqueeComp/MarqueeComp";
import NavBar from "../../components/NavBar/NavBar";


const About = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>About | The Dragon News</title>
            </Helmet>
            <Header></Header>
            <MarqueeComp></MarqueeComp>
            <NavBar></NavBar>
            <h1 className="text-5xl">About us coming soon...</h1>
        </div>
    );
};

export default About;