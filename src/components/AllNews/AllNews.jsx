import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import News from "../News/News";


const AllNews = ({ filterCategoryId }) => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(news => {
                if (filterCategoryId && filterCategoryId != 0) {
                    setAllNews(news.filter(singleNews => singleNews.category_id == filterCategoryId));
                } else {
                    setAllNews(news);
                }
            })
    }, [filterCategoryId]);


    return (
        <section className="col-span-3">
            <h3 className="text-2xl font-semibold">Dragon News Home</h3>
            <div className="mt-6 space-y-6">
                {
                    allNews.length > 0 ? allNews.map(news => <News
                        key={news._id}
                        news={news}></News>) :
                        <p className='text-center text-red-500 font-bold'>No news in this category</p>
                }
            </div>
        </section>
    );
};

AllNews.propTypes = {
    filterCategoryId: PropTypes.string
}

export default AllNews;