import React, { useState } from 'react'

const Tabs = ({ tabs, tabValue, setTabValue, }) => {
    
    return (
        <div className="flex w-full justify-between text-xs font-semibold overflow-x-auto text-nowrap">
            {tabs.map((tab, index) => {
                return (
                    <span 
                        key={index}
                        onClick={() => setTabValue(tab)}
                        className={`p-4 cursor-pointer ${
                            tab === tabValue 
                                ? "text-content-green-dark border-b-2 border-green-500 pb-2" 
                                : "text-gray-400"
                        }`}
                    >
                        {tab}
                    </span>
                )
            })}
        </div>
    )
}

export default Tabs
