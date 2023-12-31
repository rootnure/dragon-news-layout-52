import PropTypes from 'prop-types';
import { HiStar, HiOutlineStar, HiEye, HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import { Link } from 'react-router-dom';


const News = ({ news }) => {

    const { _id, author, title, image_url, details, rating, total_view } = news;
    const { img, name, published_date } = author || {};
    const { number } = rating || {};

    let ratingIcons = [];

    for (let i = 0; i < parseInt(number); i++) {
        ratingIcons.push(<HiStar key={ratingIcons.length}></HiStar>);
    }
    if (number < 5) {
        for (let i = 0; i < 5 - ratingIcons.length; i++) {
            ratingIcons.push(<HiOutlineStar key={ratingIcons.length}></HiOutlineStar>)
        }
    }

    return (
        <div className='border rounded-lg'>
            <div className='bg-gray-200 py-2 flex justify-between items-center'>
                <div className='h-full flex items-center gap-x-2 mx-4 my-2'>
                    <img src={img} alt="" className='h-10 rounded-full' />
                    <div>
                        <h4 className='font-bold'>{name || "system"}</h4>
                        <p className='text-sm'>{published_date || "<no data>"}</p>
                    </div>
                </div>
                <div className='flex gap-x-4 pe-4 text-3xl'>
                    <HiOutlineBookmark></HiOutlineBookmark>
                    <HiOutlineShare></HiOutlineShare>
                </div>
            </div>
            <div className='p-4'>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <img src={image_url} alt={`Thumbnail image of ${title}`} className='w-full' />
                <p
                    className='pt-4 text-gray-500 text-justify me-2'>
                    {
                        details.length > 512 ?
                            details.slice(0, 450) + "..." :
                            details
                    }
                    <Link to={`/newsDetails/${_id}`}>
                        <button className='text-lg font-semibold text-red-400'>Read More</button>
                    </Link>
                </p>
                <hr className='my-3 border-gray-300' />
                <div className='flex justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <div className='text-orange-400 flex text-xl'>
                            {ratingIcons}
                        </div>
                        <p>{number}</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <HiEye></HiEye>
                        <p>{total_view ? total_view + "k" : 946}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object.isRequired
}

export default News;