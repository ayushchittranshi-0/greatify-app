import { Search, Bell, Settings, User, } from 'lucide-react';

const Navigation = () => {
    return (
        <nav className="">
            <div className="flex items-center justify-between p-4 border-b border-gray-300 w-full overflow-x-auto ">
                <div className="flex items-center gap-1 ">
                    <span className="text-base text-gray-400 font-semibold">Welcome,</span>
                    <span className="text-base text-content-green-dark font-semibold">Uma Nandini</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute text-primary-bg-green left-3 top-1/2 transform -translate-y-1/2 " />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-700"
                        />
                    </div>
                    <Bell className="w-8 h-8 text-gray-500 p-2 bg-white rounded-full" />
                    <Settings className="w-8 h-8 text-gray-500 p-2 bg-white rounded-full" />

                    <img
                        src={"/avatar.png"}
                        alt={"avatarImage"}
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex text-xs font-semibold border-b border-gray-300 overflow-x-auto text-nowrap">
                <span className="p-4 text-content-green-dark border-b-2 border-orange-500 pb-2">Student</span>
                <span className="p-4 text-gray-400">Behaviour and Discipline</span>
                <span className="p-4 text-gray-400">Curriculum</span>
                <span className="p-4 text-gray-400">Extra-Curriculum Activity</span>
                <span className="p-4 text-gray-400">Health & Wellness</span>
                <span className="p-4 text-gray-400">Accessibility and Inclusivity Analysis</span>
                <span className="p-4 text-gray-400">System</span>
            </div>
        </nav>
    )
}

export default Navigation
