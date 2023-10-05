import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import MarqueeComp from "../../components/MarqueeComp/MarqueeComp";
import NavBar from "../../components/NavBar/NavBar";


const Career = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Career | The Dragon News</title>
            </Helmet>
            <Header></Header>
            <MarqueeComp></MarqueeComp>
            <NavBar></NavBar>
            <h1 className="text-5xl">Career Coming soon...</h1>
        </div>
    );
};

export default Career;