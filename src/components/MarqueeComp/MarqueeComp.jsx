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
                speed={75}>
                <p className="font-semibold me-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="font-semibold me-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="font-semibold me-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="font-semibold me-4">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Marquee>
        </div>
    );
};

export default MarqueeComp;