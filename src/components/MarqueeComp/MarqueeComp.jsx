import Marquee from "react-fast-marquee";


const MarqueeComp = () => {
    return (
        <div className="ps-36 pe-6 py-6 relative bg-gray-200">
            <div className="absolute left-4 top-0 bottom-0 flex items-center">
                <button className="bg-red-600 hover:bg-red-500 duration-100 text-white px-8 py-2 font-semibold text-lg">Latest</button>
            </div>
            <Marquee
                className=""
                pauseOnHover={true}
                pauseOnClick={false}
                gradient={true}
                gradientWidth={350}
                gradientColor="#0000003B"
                speed={75}>
                <p className="font-semibold me-4">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet.</p>
                <p className="font-semibold me-4">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine.</p>
                <p className="font-semibold me-4">Joe Biden announces $3 billion in Ukraine weapons aid.</p>
                <p className="font-semibold me-4">Tucker Carlson: Putin Winning in Ukraine, Biden Hurting West.</p>
                <p className="font-semibold me-4">SHAQUILLE O&apos;Neal auctions a 1000 size 22 REEBOKS for $999.32 each!</p>
                <p className="font-semibold me-4">George Russell wears $110 Daniel Ricciardo merchandise to Zandvoort paddock ahead of Dutch GP</p>
            </Marquee>
        </div>
    );
};

export default MarqueeComp;