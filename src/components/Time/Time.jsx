import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";


const Time = () => {

    const [time, setTime] = useState("0:00:00 xx");

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format("h:mm:ss a"));
        }, 1000);
    }, [])

    return (
        <div className="">
            <time className="fixed bottom-0 right-0 bg-black px-4 py-2 text-yellow-50 font-bold text-sm w-fit">{time}</time>
        </div>
    );
};

export default Time;