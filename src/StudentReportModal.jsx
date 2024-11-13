import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Tabs from './Tabs';

const StudentReportModal = ({ isOpen, onClose, student }) => {
    // Sample data (replace with actual data from props)
    const studentData = {
        name: "Raj Kumar",
        image: "/api/placeholder/64/64",
        affiliationNo: "1005",
        studentId: "STU000012",
        batch: "2017",
        degree: "B.Tech",
        course: "CSE",
        sem: "2nd sem",
        attendance: "6/4",
        rank: "30TH",
        progress: "5%",
        riskAlert: "Medium",
        subjectPerformance: [
            { name: "Math", score: 85 },
            { name: "Math", score: 85 },
            { name: "Math", score: 85 },
            { name: "Math", score: 85 },
            { name: "Math", score: 85 },
            { name: "Math", score: 85 },
            { name: "Math", score: 85 },
            { name: "AI", score: 75 },
            { name: "Prog lang", score: 80 },
            { name: "Com Arch", score: 70 },
            { name: "Algo", score: 90 },
            { name: "Math", score: 85 },
            { name: "AI", score: 75 },
            { name: "Prog lang", score: 80 },
            { name: "Com Arch", score: 70 },
            { name: "Algo", score: 90 }
        ],
        skills: [
            "Problem solving",
            "Time Management",
            "Emotional Intelligence",
            "Collaboration",
            "Adaptability",
            "Research Skills"
        ]
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-white to-purple-50/30">

                <DialogHeader className="space-y-4 ">
                    <div className="flex flex-col justify-between items-start">
                        <div className="flex items-center justify-between w-full gap-4">
                            <img
                                src={"/avatar.png"}
                                alt={studentData.name}
                                className="w-16 h-16 rounded-full"
                            />

                            <div className={`flex items-center gap-2
${studentData.riskAlert === 'Low'
                                    ? 'text-green-800'
                                    : 'text-purple-800'}
` }>
                                RISK ALERT:
                                <span className={`px-3 py-1 rounded-full text-sm 
${studentData.riskAlert === 'Low'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-purple-100 text-purple-800'}

                `}

                                >
                                    {studentData.riskAlert}
                                </span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold">{studentData.name}</h2>
                            <div className="flex gap-2 mt-1 text-xs font-medium">
                                <span className="px-3 py-1 bg-yellow-50 border border-yellow-700 text-yellow-700 rounded-full text-xs">
                                    Affiliation No.: {studentData.affiliationNo}
                                </span>
                                <span className="px-3 py-1 bg-yellow-50  border border-yellow-700 text-yellow-700 rounded-full text-xs">
                                    Student ID: {studentData.studentId}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col divide-y divide-gray-300 border border-gray-300 rounded-lg'>
                        {/* Student Details */}
                        <div className="grid grid-cols-4  divide-x divide-gray-200">
                            <div className="space-y-2 my-4 px-4">
                                <div className="text-sm text-gray-500 font-semibold">BATCH</div>
                                <div className="font-medium text-primary-bg-green">{studentData.batch}</div>
                            </div>
                            <div className="space-y-2 my-4 px-4">
                                <div className="text-sm text-gray-500 font-semibold">DEGREE</div>
                                <div className="font-medium text-primary-bg-green">{studentData.degree}</div>
                            </div>
                            <div className="space-y-2 my-4 px-4">
                                <div className="text-sm text-gray-500 font-semibold">COURSE</div>
                                <div className="font-medium text-primary-bg-green">{studentData.course}</div>
                            </div>
                            <div className="space-y-2 my-4 px-4">
                                <div className="text-sm text-gray-500 font-semibold">SEM</div>
                                <div className="font-medium text-primary-bg-green">{studentData.sem}</div>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-4 gap-6 divide divide-x divide-gray-200">
                            <div className="space-y-2 my-4 col-span-2 px-4">
                                <div className="text-sm text-gray-500 font-semibold">ATTENDANCE : PERFORMANCE</div>
                                <div className="font-medium text-primary-bg-green">{studentData.attendance}</div>
                            </div>
                            <div className="space-y-2 my-4 px-4">
                                <div className="text-sm text-gray-500 font-semibold">RANK</div>
                                <div className="font-medium text-primary-bg-green">{studentData.rank}</div>
                            </div>
                            <div className="space-y-2 my-4 px-4">
                                <div className="text-sm text-gray-500 font-semibold">PROGRESS</div>
                                <div className="font-medium text-primary-bg-green">↗ {studentData.progress}</div>
                            </div>
                        </div>
                    </div>
                </DialogHeader>

                <div className='border-t border-gray-300 mt-4 mb-2'></div>

                <div className="space-y-4">
                    <div className="flex items-center w-full ">
                        <Tabs tabs={['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6']} initialTab={"Sem 1"} />
                    </div>
                </div>

                <div className="mt-6 w-full overflow-hidden">
                    <h3 className="text-sm font-semibold text-primary-bg-green mb-4 w-full overflow-hidden">Subject Performance</h3>
                    <div className={`flex overflow-x-auto w-full gap-4
custom-scrollbar
            [&::-webkit-scrollbar]:h-1.5
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-emerald-500
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-track]:rounded-full
            scrollbar-thin
            scrollbar-track-gray-100
            scrollbar-thumb-emerald-500
pb-4
                        `}>
                        <table className="w-full table-auto border-collapse">
                            <tbody>
                                {/* First row - Subject Names */}
                                <tr>
                                    {studentData.subjectPerformance.map((subject, index) => (
                                        <td
                                            key={index}
                                            className="text-center text-sm p-4 text-primary-bg-green text-nowrap 
                             border border-gray-200 whitespace-nowrap overflow-hidden"
                                        >
                                            {subject.name}
                                        </td>
                                    ))}
                                </tr>

                                {/* Second row - Values */}
                                <tr>
                                    {studentData.subjectPerformance.map((subject, index) => (
                                        <td
                                            key={index}
                                            className="text-center text-sm p-4 text-gray-700 
                             border border-gray-200"
                                        >
                                            00
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-sm font-semibold text-primary-bg-green mb-4 w-full overflow-hidden">Skills Developed</h3>
                    <div className="grid grid-cols-3 gap-4 text-xs font-semibold text-primary-bg-green">
                        {studentData.skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary-bg-green" />
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};


export default StudentReportModal;
