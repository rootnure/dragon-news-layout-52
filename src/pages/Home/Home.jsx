import { Helmet } from "react-helmet-async";
import AllNews from "../../components/AllNews/AllNews";
import Header from "../../components/Header/Header";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation";
import MarqueeComp from "../../components/MarqueeComp/MarqueeComp";
import NavBar from "../../components/NavBar/NavBar";
import RightNavigation from "../../components/RightNavigation/RightNavigation";
import { useState } from "react";


const Home = () => {

    const [filterCategoryId, setFilterCategoryId] = useState("");

    const handleFilterByCategory = (categoryId = null) => {
        setFilterCategoryId(categoryId);
    }

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Home | The Dragon News</title>
            </Helmet>
            <Header></Header>
            <MarqueeComp></MarqueeComp>
            <NavBar></NavBar>
            <div className="grid grid-cols-5 gap-x-8 mt-8">
                <LeftNavigation
                    handleFilterByCategory={handleFilterByCategory}
                ></LeftNavigation>
                <AllNews
                    filterCategoryId={filterCategoryId}
                ></AllNews>
                <RightNavigation></RightNavigation>
            </div>
        </div>
    );
};

export default Home;