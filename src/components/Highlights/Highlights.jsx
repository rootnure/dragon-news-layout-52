import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import Highlight from "./Highlight";


const Highlights = ({ isFlex }) => {

    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        fetch('/highlights.json')
            .then(res => res.json())
            .then(data => setHighlights(data))
    }, [])

    return (
        <div className={`mt-8 ${isFlex ? 'flex gap-x-6' : 'space-y-8'}`}>
            {
                highlights.map(highlight => <Highlight
                    key={highlight.id}
                    highlight={highlight}
                    parentIsFlex={isFlex}></Highlight>)
            }
        </div>
    );
};

Highlights.propTypes = {
    isFlex: PropTypes.bool
}

export default Highlights;