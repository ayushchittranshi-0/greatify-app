import { Select, SelectTrigger, SelectContent, SelectValue,SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from 'lucide-react';
import PiechartCustom from "./Piechart";
import LineChartCustom from "./LineChartCustom";


const GraphCard = () => {
    return (
        <div className="pt-4 px-4 pb-6 ">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex items-center border-b border-gray-300 justify-between p-4">
                    <h1 className="text-xl font-semibold text-content-green-dark">Students analysis overview</h1>
                    <div className="flex gap-4">
                        <Select defaultValue="btech">
                            <SelectTrigger className="min-w-[100px] bg-inherit border-gray-300">
                                <SelectValue>Sem 2</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sem1">Sem 1</SelectItem>
                                <SelectItem value="sem2">Sem 2</SelectItem>
                                <SelectItem value="sem3">Sem 3</SelectItem>
                                <SelectItem value="sem4">Sem 4</SelectItem>
                                <SelectItem value="sem5">Sem 5</SelectItem>
                                <SelectItem value="sem6">Sem 6</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="btech">
                            <SelectTrigger className="min-w-[100px] bg-inherit border-gray-300">
                                <SelectValue>B.Tech</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="btech">B.Tech</SelectItem>
                                <SelectItem value="mtech">M.Tech</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="btech">
                            <SelectTrigger className="min-w-[100px] bg-inherit border-gray-300">
                                <SelectValue>CSE</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cse">CSE</SelectItem>
                                <SelectItem value="mechanical">Mechanical</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>


                <div className="grid grid-cols-7 bg-white divide-x divide-gray-300">
                    {/* Attendance Card */}
                    <PiechartCustom title="Student Attendance" data={attendanceData} subHeading="Total students: 17260"
                        bottomJsx={
                            <div className="mt-4 border-t border-gray-300 p-4 text-xs">
                                <div className="flex justify-between ">
                                    <span>Frequently missed days:</span>
                                    <span className="font-semibold text-content-green-dark">CHEMISTRY</span>
                                </div>
                                <div className="flex justify-between  mt-2">
                                    <span>Frequently attended days:</span>
                                    <span className="font-semibold text-content-green-dark">MATHS</span>
                                </div>
                            </div>
                        }

                    />


                    <PiechartCustom title="Academic Summary" data={academicData} subHeading="Total students: 17260"
                        bottomJsx={
                            <div className="mt-4 border-t border-gray-300 p-4 text-xs">
                                <div className="flex justify-between ">
                                    <span>Most Failed subject:</span>
                                    <span className="font-semibold text-content-green-dark">CHEMISTRY</span>
                                </div>
                                <div className="flex justify-between  mt-2">
                                    <span>Most Passed subject:</span>
                                    <span className="font-semibold text-content-green-dark">MATHS</span>
                                </div>
                            </div>
                        }

                    />

                    <div className="col-span-3 shadow-none border-0 rounded-none">
                        <LineChartCustom
                            data={unversityGraph}
                            color={"#00DC46"}
                            gradientStart={"rgba(0, 220, 70, 0.4)"}
                            gradientStop={"rgba(0, 220, 70, 0  )"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphCard

// Sample data for the charts
const attendanceData = [
    { name: 'Present', value: 1000, color: '#10B981' },
    { name: 'Absent', value: 600, color: '#F97316' },
    { name: 'Late', value: 400, color: '#064E3B' }
];

const academicData = [
    { name: 'Above average', value: 30, color: '#4F46E5' },
    { name: 'Average', value: 50, color: '#818CF8' },
    { name: 'Poor', value: 20, color: '#C7D2FE' }
];

const performanceData = [
    { sem: 'Sem 1', value: 65 },
    { sem: 'Sem 2', value: 70 },
    { sem: 'Sem 3', value: 68 },
    { sem: 'Sem 4', value: 75 },
    { sem: 'Sem 5', value: 85 },
    { sem: 'Sem 6', value: 90 }
];

const studentData = [
    { id: 'D866', name: 'Raj Kumar', course: 'B.Tech', year: '1st yr', sem: '2nd sem', attendance: '80%', gpa: '2.4', progress: '5%', rank: '30th', risk: 'Medium' },
    { id: 'D867', name: 'Riya Shah', course: 'B.Tech', year: '1st yr', sem: '2nd sem', attendance: '60%', gpa: '3.5', progress: '8%', rank: '12th', risk: 'Low' },
    { id: 'D868', name: 'Manoj Shetty', course: 'B.Tech', year: '1st yr', sem: '2nd sem', attendance: '70%', gpa: '3.0', progress: '1%', rank: '18th', risk: 'Low' }
];


const unversityGraph = {
    xaxis: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    plots: [0, 0, 2, 1, 5, 7, 3, 5, 2, 6, 5, 7],
};
