import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const MarqueeComp = () => {
    return (
        <div className="ps-36 pe-6 py-6 relative bg-gray-200">
            <div className="absolute left-4 top-0 bottom-0 flex items-center">
                <button className="bg-red-600 hover:bg-red-500 duration-100 text-white px-8 py-2 font-semibold text-lg">Latest</button>
            </div>
            <Marquee
                className=""
                pauseOnHover={false}
                pauseOnClick={false}
                gradient={true}
                gradientWidth={350}
                gradientColor="#0000003B"
                speed={75}>
                <Link to={`/newsDetails/0282e0e58a5c404fbd15261f11c2ab6a`}><p className="font-semibold me-4">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet.</p></Link>
                <Link to={`/newsDetails/f69a695f037cd9484cecaea37ca71011`}><p className="font-semibold me-4">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine.</p></Link>
                <Link to={`/newsDetails/11468ed61aee84de492a8b04158a22f9`}><p className="font-semibold me-4">Joe Biden announces $3 billion in Ukraine weapons aid.</p></Link>
                <Link to={`/newsDetails/f69a695f037cd9484cecaea37ca71011`}><p className="font-semibold me-4">Tucker Carlson: Putin Winning in Ukraine, Biden Hurting West.</p></Link>
                <Link to={`/newsDetails/e342b6c0c8efc8ca9e811991dc8a7900`}><p className="font-semibold me-4">SHAQUILLE O&apos;Neal auctions a 1000 size 22 REEBOKS for $999.32 each!</p></Link>
            </Marquee>
        </div>
    );
};

export default MarqueeComp;