import PropTypes from 'prop-types';
import { BsCalendar4 } from 'react-icons/Bs';


const Highlight = ({ news }) => {

    const { img, title, type, publish_date } = news;

    return (
        <div className='space-y-6 cursor-pointer hover:scale-105 duration-100'>
            <figure>
                <img src={img} alt="News Cover" className='rounded-md w-full' />
            </figure>
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className='flex gap-x-6 mt-4 text-sm'>
                    <p className='font-semibold'>{type}</p>
                    <div className='flex gap-x-2 items-center text-gray-400 font-semibold'>
                        <BsCalendar4></BsCalendar4>
                        <p className=''>{publish_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Highlight.propTypes = {
    news: PropTypes.object.isRequired
}

export default Highlight;