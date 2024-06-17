import React, { useEffect, useState } from 'react';

function Activity() {
    const [currentActivity, setCurrentActivity] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [activityStartTime, setActivityStartTime] = useState(null);


    useEffect(() => {
        const ws = new WebSocket('wss://portfolio-backend-otc0.onrender.com');

        ws.onmessage = (message) => {
            const activity = JSON.parse(message.data);
            // console.log(activity);           //debugging
            setCurrentActivity(activity);
            setActivityStartTime(Date.now() - activity.elapsed); // Initialize the activity start time

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
        const currentTime = new Date();
        // Calculate elapsed time based on the difference between current time and start time
        const elapsedTime = Math.max(0, Math.min(currentTime - new Date(startTime), totalDuration));
        return (elapsedTime / totalDuration) * 100; // Progress as a percentage
    };

     const formatElapsedTime = (startTime) => {
        const elapsedMilliseconds = Date.now() - startTime;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };




    return (
        <div className="bg-gray-900 text-white py-6 ">
            <div className="container mx-auto text-center">
                <hr className=" border-t w-4/5 border-gray-600 mx-auto pb-8" />

                <p className=' text-left pl-8  pb-4 text-[#b3dcf2] text-2xl font-bold'>activity :</p>

                {currentActivity ? (
                    currentActivity.activity === 'Spotify' ? (
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
                            <div className="text-left w-60">
                                <h3 className="text-lg font-bold text-blue-300  md:pb-0">@{currentActivity.username}</h3>
                                <p className="text-orange-300">{currentActivity.status}</p>
                                <div className="text-green-300 ">{activityStartTime ? formatElapsedTime(activityStartTime) : '00:00:00'} elapsed</div>

                                <p className=" text-lg text-gray-400 pb-2 pt-2">{currentActivity.activity}</p>

                                <p className=" font-bold text-xl text-cyan-300 break-words">{currentActivity.songName}</p>
                                <p className="text-gray-500 break-words">by {currentActivity.artistName}</p>
                                {/* Song progress bar */}
                                <div className=" w-3/4 bg-gray-700 rounded-full h-2 mt-4 mb-2">
                                    <div
                                        style={{ width: `${calculateProgress()}%` }}
                                        className="bg-orange-300 rounded-full h-full transition-transform duration-500 ease-linear"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mb-4 flex flex-col items-center md:flex-row md:items-start md:space-x-4" key={currentActivity.id}>
                            {currentActivity.image && (
                                <div className="w-16 h-16 mb-4 md:mb-0 relative">
                                    <img
                                        src={currentActivity.image}
                                        alt={currentActivity.activity}
                                        className="w-16 h-16 cover object-contain rounded"
                                    />
                                </div>
                            )}
                            <div className="text-left w-60">
                                <h3 className="text-lg font-bold text-blue-300  md:pb-0">@{currentActivity.username}</h3>
                                <p className="text-orange-300">{currentActivity.status}</p>
                                <div className="text-green-300 ">{activityStartTime ? formatElapsedTime(activityStartTime) : '00:00:00'} elapsed</div>

                                <p className=" text-lg text-cyan-300 pb-2 pt-2">{currentActivity.activity}</p>
                                <p className=" font-bold text-xl text-gray-400 break-words">{currentActivity.project}</p>
                                <p className="text-gray-500 break-words">{currentActivity.fileName}</p>
                                
                            </div>
                        </div>
                    )
                ) : (
                    <div className="text-center pt-10">
                        <p className="text-lg font-bold text-blue-300 pb-3 md:pb-0">@raju_kumar_12003</p>
                        <p className="text-orange-300">Offline</p>
                        <p className="text-green-300">{currentTime}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Activity;
