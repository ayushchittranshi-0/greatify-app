import React, { useState } from 'react'

const Tabs = ({ tabs, initialTab }) => {
    const [currentTab, setCurrentTab] = useState(initialTab)
    
    return (
        <div className="flex w-full justify-between text-xs font-semibold overflow-x-auto text-nowrap">
            {tabs.map((tab, index) => {
                return (
                    <span 
                        key={index}
                        onClick={() => setCurrentTab(tab)}
                        className={`p-4 cursor-pointer ${
                            tab === currentTab 
                                ? "text-content-green-dark border-b-2 border-orange-500 pb-2" 
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
