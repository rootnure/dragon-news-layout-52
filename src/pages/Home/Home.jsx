import { Helmet } from "react-helmet-async";
import AllNews from "../../components/AllNews/AllNews";
import Header from "../../components/Header/Header";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation";
import MarqueeComp from "../../components/MarqueeComp/MarqueeComp";
import NavBar from "../../components/NavBar/NavBar";
import RightNavigation from "../../components/RightNavigation/RightNavigation";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Home | The Dragon News</title>
            </Helmet>
            <Header></Header>
            <MarqueeComp></MarqueeComp>
            <NavBar></NavBar>
            <div className="grid grid-cols-5 gap-x-8 mt-8">
                <LeftNavigation></LeftNavigation>
                <AllNews></AllNews>
                <RightNavigation></RightNavigation>
            </div>
        </div>
    );
};

export default Home;