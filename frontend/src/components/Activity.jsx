import React, { useEffect, useState } from 'react';

function Activity() {
    const [currentActivity, setCurrentActivity] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3000');

        ws.onmessage = (message) => {
            const activity = JSON.parse(message.data);
            console.log(activity);
            setCurrentActivity(activity);
        };

        const clockInterval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
        }, 1000);

        return () => {
            ws.close();
            clearInterval(clockInterval);
        };
    }, []);


    const calculateProgress = () => {
        if (!currentActivity) return 0;

        const { startTime, endTime } = currentActivity;

        const totalDuration = Math.max(1, Math.floor(new Date(endTime) - new Date(startTime)));
        const currentTime = new Date(); // Get the current time

        // Calculate elapsed time based on the difference between current time and start time
        const elapsedTime = Math.max(0, Math.min(currentTime - new Date(startTime), totalDuration));

        return (elapsedTime / totalDuration) * 100; // Progress as a percentage
    };


    return (
        <div className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                {currentActivity ? (
                    <div className="mb-4 flex flex-col items-center md:flex-row md:items-start md:space-x-4" key={currentActivity.id}>
                        {currentActivity.image && (
                            <div className="w-16 h-16 mb-4 md:mb-0 relative">

                                <a href={currentActivity.songUrl} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={currentActivity.image}
                                        alt={currentActivity.activity}
                                        className=" w-16 h-16coverobject- rounded-full animate-spin"
                                    />
                                </a>
                            </div>
                        )}
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-blue-300 pb-3 md:pb-0">@{currentActivity.username}</h3>
                            <p className="text-orange-300">{currentActivity.status}</p>
                            <div className=" text-green-300 mb-4">{currentTime}</div> {/* Real-time clock */}
                            
                            <p className=" text-xl text-green-300 pb-2">{currentActivity.activity}</p>
                            
                            <p className=" font-bold text-xl text-gray-400">{currentActivity.songName}</p>
                            <p className="text-gray-500">by {currentActivity.artistName}</p>
                            {/* Song progress bar */}
                            <div className="w-full bg-gray-800 rounded-full h-2 mt-4 mb-2">
                                <div
                                    style={{ width: `${calculateProgress()}%` }}
                                    className="bg-orange-300 rounded-full h-full transition-transform duration-500 ease-linear"
                                />
                            </div>
                        </div>
                    </div>
                ) :
                    
                (
                    <div className="text-center">
                            <p className="text-xl font-bold text-blue-300 pb-3 md:pb-0">@raju_kumar_12003</p>
                        <p className="text-orange-300">Offline</p>
                        <p className="text-green-300">{currentTime}</p>
                    </div>)}
            </div>
        </div>
    );
}

export default Activity;
