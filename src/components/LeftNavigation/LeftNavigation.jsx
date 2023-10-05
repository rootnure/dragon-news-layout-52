import { useEffect } from "react";
import { useState } from "react";
import Highlights from "../Highlights/Highlights";
import PropTypes from 'prop-types';


const LeftNavigation = ({ handleFilterByCategory }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <aside className="">
            <h3 className="text-2xl font-semibold">All Category</h3>
            <ul className="space-y-2 mt-6 font-semibold text-gray-400 text-lg">
                {
                    categories.map(category => <li
                        key={category.id}
                        onClick={() => handleFilterByCategory(category.id)}>
                        <button className="hover:bg-gray-200 w-full text-left ps-8 pe-2 py-3 rounded-lg">{category.name}</button>
                    </li>)
                }
            </ul>
            <Highlights></Highlights>
        </aside>
    );
};

LeftNavigation.propTypes = {
    handleFilterByCategory: PropTypes.func.isRequired
}

export default LeftNavigation;