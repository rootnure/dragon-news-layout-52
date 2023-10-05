import { useEffect } from "react";
import { useState } from "react";
import Highlight from "./Highlight";

const newNews = [
    {
        id: 0,
        img: "https://i.ibb.co/vsn8yz0/1.png",
        title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
        type: "Sports",
        publish_date: "Jan 4, 2022",
    },
    {
        id: 1,
        img: "https://i.ibb.co/QNMM8Bz/2.png",
        title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
        type: "Sports",
        publish_date: "Jan 4, 2022",
    },
    {
        id: 2,
        img: "https://i.ibb.co/jfpz834/3.png",
        title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
        type: "Sports",
        publish_date: "Jan 4, 2022",
    },
]

const Highlights = () => {

    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        // fetch('https://news.com/highlights?app=news')
        //     .then(res => res.json())
        //     .then(data => setHighlights(data))
        setHighlights(newNews);
    }, [])

    return (
        <div className="space-y-8 mt-8">
            {
                highlights.map(highlight => <Highlight
                    key={highlight.id}
                    news={highlight}></Highlight>)
            }
        </div>
    );
};

export default Highlights;