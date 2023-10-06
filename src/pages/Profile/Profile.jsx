import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import MarqueeComp from "../../components/MarqueeComp/MarqueeComp";
import NavBar from "../../components/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Career | The Dragon News</title>
            </Helmet>
            <Header></Header>
            {user && <MarqueeComp></MarqueeComp>}
            <NavBar></NavBar>
            <h1 className="text-5xl">Profile Coming soon...</h1>
        </div>
    );
};

export default Profile;