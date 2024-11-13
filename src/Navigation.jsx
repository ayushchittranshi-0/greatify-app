import { Search, Bell, Settings, User, } from 'lucide-react';

const Navigation = () => {
    return (
        <nav className="">
            <div className="flex items-center justify-between p-4 border-b border-gray-300 ">
                <div className="flex items-center gap-1 ">
                    <span className="text-base text-gray-400 font-semibold">Welcome,</span>
                    <span className="text-base text-content-green-dark font-semibold">Uma Nandini</span>
                </div>
                <div className="flex items-center gap-4">
                    <Search className="w-5 h-5 text-gray-500" />
                    <Bell className="w-5 h-5 text-gray-500" />
                    <Settings className="w-5 h-5 text-gray-500" />
                    <User className="w-5 h-5 text-gray-500" />
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
