import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const RightNavigation = () => {
    return (
        <aside className="">
            <div className='space-y-2'>
                <h3 className="text-2xl font-semibold mb-6">Login With</h3>
                <button className='flex justify-center gap-x-1 p-2 items-center text-blue-600 font-semibold w-full border border-blue-600 rounded'>
                    <AiOutlineGoogle className='text-3xl'></AiOutlineGoogle>
                    <p className='text-sm'>Login with Google</p>
                </button>
                <button className='flex justify-center gap-x-1 p-2 items-center font-semibold w-full border border-black rounded'>
                    <AiFillGithub className='text-3xl'></AiFillGithub>
                    <p className='text-sm'>Login with Github</p>
                </button>
            </div>

            <div className='mt-8'>
                <h3 className="text-2xl font-semibold mb-6">Find Us On</h3>
                <button className='flex justify-start gap-x-2 px-6 py-2 items-center font-semibold w-full border border-gray-300 rounded-t'>
                    <FaFacebookF className='p-2 bg-gray-100 rounded-full text-4xl text-blue-600'></FaFacebookF>
                    <p>Facebook</p>
                </button>
                <button className='flex justify-start gap-x-2 px-6 py-2 items-center font-semibold w-full border-x border-gray-300'>
                    <FaTwitter className='p-2 bg-gray-100 rounded-full text-4xl text-blue-400'></FaTwitter>
                    <p>Twitter</p>
                </button>
                <button className='flex justify-start gap-x-2 px-6 py-2 items-center font-semibold w-full border border-gray-300 rounded-b'>
                    <FaInstagram className='p-2 bg-gray-100 rounded-full text-4xl text-rose-600'></FaInstagram>
                    <p>Instagram</p>
                </button>
            </div>

            <div className='mt-8 bg-gray-100 py-3 px-1 rounded-md'>
                <h3 className="text-2xl font-semibold ps-2 mb-6">Q-Zone</h3>
                <img src="https://i.ibb.co/L5VFLrj/qZone1.png" alt="Q-Zone image Swimming" />
                <img src="https://i.ibb.co/3z7P2Q5/qZone2.png" alt="Q-Zone image Class" />
                <img src="https://i.ibb.co/6WzyqD4/qZone3.png" alt="Q-Zone image Play Ground" />
            </div>

            <div className="advertisement h-[720px] bg-purple-950 mt-8">

            </div>
        </aside>
    );
};

export default RightNavigation;