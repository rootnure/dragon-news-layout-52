import Header from "../../components/Header/Header";
import MarqueeComp from "../../components/MarqueeComp/MarqueeComp";
import NavBar from "../../components/NavBar/NavBar";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <MarqueeComp></MarqueeComp>
            <NavBar></NavBar>
            <p className="text-3xl">Home Page</p>
        </div>
    );
};

export default Home;