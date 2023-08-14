import React from 'react';
import DateTimeDisplay from './components/date-time-display.component';

function dashboard() {

    return (
        
        <div className="flex h-screen w-full">
            <div className="flex flex-col flex-1 w-full">
                <main className="relative z-0 flex-1 pb-8 px-6 bg-white">
                    <div className="grid pb-10 mt-4">
                        {/* Start Content */}
                        <div className="mb-2">
                            <p className="text-lg font-semibold text-gray-800">
                                DashBoard
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        
    );
}

export default dashboard