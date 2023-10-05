import { useEffect } from "react";
import { useState } from "react";
import Highlight from "./Highlight";

const Highlights = () => {

    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        fetch('/highlights.json')
            .then(res => res.json())
            .then(data => setHighlights(data))
    }, [])

    return (
        <div className="space-y-8 mt-8">
            {
                highlights.map(highlight => <Highlight
                    key={highlight.id}
                    highlight={highlight}></Highlight>)
            }
        </div>
    );
};

export default Highlights;