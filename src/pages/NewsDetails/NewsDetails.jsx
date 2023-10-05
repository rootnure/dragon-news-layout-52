import { Link, useLoaderData } from 'react-router-dom';
import Header from '../../components/Header/Header';
import RightNavigation from '../../components/RightNavigation/RightNavigation';
import { HiArrowLeft } from "react-icons/hi";
import Highlights from '../../components/Highlights/Highlights';


const NewsDetails = () => {

    const news = useLoaderData();

    const { title, image_url, details } = news;

    return (
        <section className="container mx-auto">
            <Header></Header>
            <div className="grid grid-cols-5 gap-x-8 mt-12">
                <div className='col-span-4'>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Dragon News</h3>
                        <div className='border p-6 space-y-6'>
                            <img src={image_url} alt={`News thumbnail of ${title}`} />
                            <h3 className="text-3xl font-bold">{title}</h3>
                            <p className='text-gray-600'>{details}</p>
                            <Link to="/" className='block mt-4'>
                                <button className="text-lg bg-red-600 text-white px-6 py-2 font-semibold flex items-center gap-x-2">
                                    <HiArrowLeft></HiArrowLeft>
                                    <span>All news in this category</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold my-6">Editors Insight</h3>
                        <Highlights isFlex={true}></Highlights>
                    </div>
                </div>
                <RightNavigation></RightNavigation>
            </div>
        </section>
    );
};

export default NewsDetails;