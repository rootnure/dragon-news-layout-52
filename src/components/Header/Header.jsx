import moment from 'moment';


const Header = () => {

    const day = moment().format("dddd");
    const date = moment().format("MMMM D, YYYY");

    return (
        <header className='flex flex-col items-center gap-y-2.5 pb-8'>
            <p className='text-gray-500'>Journalism Without Fear of Favour</p>
            <h4 className="text-lg text-gray-500"><span className="font-semibold">{day}</span>, {date}</h4>
        </header>
    );
};

export default Header;