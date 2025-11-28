import React from 'react';

const F1JapanCard = () => {
    return (
        <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-full max-w-[94%] px-4 z-20">
            <div
                className="relative rounded-xl overflow-hidden shadow-2xl h-64 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://wallpapercave.com/wp/wp8656100.jpg?auto=compress&cs=tinysrgb&w=800)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col p-6">

                    <div className="flex flex-col justify-evenly align-text-center flex-1 w-fit ml-auto mr-4">
                        <h3 className="text-4xl font-bold text-white mb-1 tracking-tight w-fit">
                            F1 JAPAN
                        </h3>
                        <p className="text-gray-200 text-xs mb-0.5 w-fit font-bold">
                            Park Alojat | Esc 18$09/22 GRSS
                        </p>
                        <p className="text-gray-200 text-xs mb-3 w-fit font-bold">
                            Vehena I Dir 851,000 persrts
                        </p>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm w-fit font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Request My Package
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default F1JapanCard;
