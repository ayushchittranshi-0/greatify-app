import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import PiechartCustom from "./Piechart";
import LineChartCustom from "./LineChartCustom";
import { useState } from "react";


const GraphCard = () => {
    const [branch, setBranch] = useState("cse");
    const [course, setCourse] = useState("btech");
    const [semester, setSemester] = useState("sem1");

    const [performanceSemester, setPerformanceSemester] = useState("sem6");

    const getAcademicStatus = (data) => {

        const totalPerformance = data.reduce((total, entry) => total + entry.value, 0);
        const belowAverageValue = data.find(entry => entry.name === 'Above average')?.value || 0;
        const belowAveragePercentage = (belowAverageValue / totalPerformance) * 100;

        if (belowAveragePercentage <=20) return "Excellent";
        if (belowAveragePercentage <= 50) return "Fair";
        return "Poor";
   };

    const getAttendanceStatus = (data) => {
        const totalAttendance = data.reduce((total, entry) => total + entry.value, 0);
        const presentValue = data.find(entry => entry.name === 'Present')?.value || 0;
        const presentPercentage = (presentValue / totalAttendance) * 100;

        if (presentPercentage >= 75) return "Excellent";
        if (presentPercentage >= 50) return "Fair";
        return "Poor";
    };

    return (
        <div className="pt-4 px-4 pb-6 ">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex items-center border-b border-gray-300 justify-between p-4">
                    <h1 className="text-xl font-semibold text-content-green-dark">Students analysis overview</h1>
                    <div className="flex gap-4">

                        <Select
                            value={course}
                            onValueChange={(value) => setCourse(value)}
                        >
                            <SelectTrigger className="min-w-[100px] bg-inherit border-gray-300">
                                <SelectValue>
                                    {course === "btech" ? "B.Tech" : "M.Tech"}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="btech">B.Tech</SelectItem>
                                <SelectItem value="mtech">M.Tech</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select
                            value={branch}
                            onValueChange={(value) => setBranch(value)}
                        >
                            <SelectTrigger className="min-w-[100px] bg-inherit border-gray-300">
                                <SelectValue>
                                    {branch === "cse" ? "CSE" : "Mechanical"}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cse">CSE</SelectItem>
                                <SelectItem value="mechanical">Mechanical</SelectItem>
                            </SelectContent>
                        </Select>


                        <Select
                            value={semester}
                            onValueChange={(value) => setSemester(value)}
                        >
                            <SelectTrigger className="min-w-[100px] bg-inherit border-gray-300">
                                <SelectValue>
                                    {semester === "sem1" ? "Sem 1" : "Sem 2"}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sem1">Sem 1</SelectItem>
                                <SelectItem value="sem2">Sem 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>


                <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-1 bg-white divide-x divide-y divide-gray-300">
                    <PiechartCustom title="Student Attendance" branch={branch} course={course} semester={semester} data={attendanceData}
                        subHeading={`Total students: ${attendanceData[course][branch][semester].data.reduce((total, entry) => total + entry.value, 0)}`}
                        status={getAttendanceStatus(attendanceData[course][branch][semester].data)}
                        bottomJsx={
                            <div className="mt-4 border-t border-gray-300 p-4 text-xs">
                                <div className="flex justify-between ">
                                    <span>Frequently missed days:</span>
                                    <span className="font-semibold text-content-green-dark">
                                        {attendanceData[course][branch][semester].frequently_missed_days.join(", ")}
                                    </span>
                                </div>
                                <div className="flex justify-between  mt-2">
                                    <span>Frequently attended days:</span>
                                    <span className="font-semibold text-content-green-dark">
                                        {attendanceData[course][branch][semester].frequently_attended_days.join(", ")}
                                    </span>
                                </div>
                            </div>
                        }

                    />


                    <PiechartCustom title="Academic Summary" branch={branch} course={course} semester={semester} data={academicData}
                        subHeading={`Total students: ${academicData[course][branch][semester].data.reduce((total, entry) => total + entry.value, 0)}`}
                        status={getAcademicStatus(attendanceData[course][branch][semester].data)}
                        bottomJsx={
                            <div className="mt-4 border-t border-gray-300 p-4 text-xs">
                                <div className="flex justify-between ">
                                    <span>Most Failed subject:</span>
                                    <span className="font-semibold text-content-green-dark">{academicData[course][branch][semester].most_failed_subject.join(", ")}</span>
                                </div>
                                <div className="flex justify-between  mt-2">
                                    <span>Most Passed subject:</span>
                                    <span className="font-semibold text-content-green-dark">{academicData[course][branch][semester].most_passed_subject.join(", ")}</span>
                                </div>
                            </div>
                        }

                    />

                    <div className="col-span-3 shadow-none border-0 rounded-none">
                        <LineChartCustom
                            branch={branch}
                            course={course}
                            performanceSemester={performanceSemester}
                            setPerformanceSemester={setPerformanceSemester}
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

const attendanceData = {
    btech: {
        cse: {
            sem1: {
                data: [
                    { name: 'Present', value: 1000, color: '#10B981' },
                    { name: 'Absent', value: 600, color: '#F97316' },
                    { name: 'Late', value: 400, color: '#064E3B' }
                ],
                frequently_missed_days: ["Tuesday", "Wednesday"],
                frequently_attended_days: ["Monday", "Thursday"]
            },
            sem2: {
                data: [
                    { name: 'Present', value: 1200, color: '#10B981' },
                    { name: 'Absent', value: 500, color: '#F97316' },
                    { name: 'Late', value: 300, color: '#064E3B' }
                ],
                frequently_missed_days: ["Friday", "Wednesday"],
                frequently_attended_days: ["Monday", "Tuesday"]
            }
        },
        mechanical: {
            sem1: {
                data: [
                    { name: 'Present', value: 900, color: '#10B981' },
                    { name: 'Absent', value: 400, color: '#F97316' },
                    { name: 'Late', value: 200, color: '#064E3B' }
                ],
                frequently_missed_days: ["Monday", "Wednesday"],
                frequently_attended_days: ["Thursday", "Friday"]
            },
            sem2: {
                data: [
                    { name: 'Present', value: 800, color: '#10B981' },
                    { name: 'Absent', value: 500, color: '#F97316' },
                    { name: 'Late', value: 200, color: '#064E3B' }
                ],
                frequently_missed_days: ["Tuesday", "Wednesday"],
                frequently_attended_days: ["Thursday", "Friday"]
            }
        }
    },
    mtech: {
        cse: {
            sem1: {
                data: [
                    { name: 'Present', value: 800, color: '#10B981' },
                    { name: 'Absent', value: 300, color: '#F97316' },
                    { name: 'Late', value: 100, color: '#064E3B' }
                ],
                frequently_missed_days: ["Thursday"],
                frequently_attended_days: ["Monday", "Friday"]
            },
            sem2: {
                data: [
                    { name: 'Present', value: 850, color: '#10B981' },
                    { name: 'Absent', value: 250, color: '#F97316' },
                    { name: 'Late', value: 100, color: '#064E3B' }
                ],
                frequently_missed_days: ["Wednesday"],
                frequently_attended_days: ["Monday", "Tuesday"]
            }
        },
        mechanical: {
            sem1: {
                data: [
                    { name: 'Present', value: 600, color: '#10B981' },
                    { name: 'Absent', value: 200, color: '#F97316' },
                    { name: 'Late', value: 100, color: '#064E3B' }
                ],
                frequently_missed_days: ["Friday"],
                frequently_attended_days: ["Monday", "Wednesday"]
            },
            sem2: {
                data: [
                    { name: 'Present', value: 650, color: '#10B981' },
                    { name: 'Absent', value: 150, color: '#F97316' },
                    { name: 'Late', value: 100, color: '#064E3B' }
                ],
                frequently_missed_days: ["Thursday"],
                frequently_attended_days: ["Tuesday", "Wednesday"]
            }
        }
    }
};

const academicData = {
    btech: {
        cse: {
            sem1: {
                data: [
                    { name: 'Above average', value: 800, color: '#4F46E5' },
                    { name: 'Average', value: 900, color: '#818CF8' },
                    { name: 'Poor', value: 300, color: '#C7D2FE' }
                ],
                most_failed_subject: ["DSA", "PHY"],
                most_passed_subject: ["M1", "PPS"]
            },
            sem2: {
                data: [
                    { name: 'Above average', value: 900, color: '#4F46E5' },
                    { name: 'Average', value: 800, color: '#818CF8' },
                    { name: 'Poor', value: 300, color: '#C7D2FE' }
                ],
                most_failed_subject: ["CN", "EC"],
                most_passed_subject: ["DBMS", "ADA"]
            }
        },
        mechanical: {
            sem1: {
                data: [
                    { name: 'Above average', value: 600, color: '#4F46E5' },
                    { name: 'Average', value: 700, color: '#818CF8' },
                    { name: 'Poor', value: 200, color: '#C7D2FE' }
                ],
                most_failed_subject: ["TD", "MS"],
                most_passed_subject: ["ED", "WS"]
            },
            sem2: {
                data: [
                    { name: 'Above average', value: 500, color: '#4F46E5' },
                    { name: 'Average', value: 800, color: '#818CF8' },
                    { name: 'Poor', value: 200, color: '#C7D2FE' }
                ],
                most_failed_subject: ["FM", "SOM"],
                most_passed_subject: ["MP", "M2"]
            }
        }
    },
    mtech: {
        cse: {
            sem1: {
                data: [
                    { name: 'Above average', value: 500, color: '#4F46E5' },
                    { name: 'Average', value: 500, color: '#818CF8' },
                    { name: 'Poor', value: 200, color: '#C7D2FE' }
                ],
                most_failed_subject: ["AAD", "ML"],
                most_passed_subject: ["RM", "ADS"]
            },
            sem2: {
                data: [
                    { name: 'Above average', value: 600, color: '#4F46E5' },
                    { name: 'Average', value: 400, color: '#818CF8' },
                    { name: 'Poor', value: 200, color: '#C7D2FE' }
                ],
                most_failed_subject: ["CC", "BDA"],
                most_passed_subject: ["SA", "WT"]
            }
        },
        mechanical: {
            sem1: {
                data: [
                    { name: 'Above average', value: 400, color: '#4F46E5' },
                    { name: 'Average', value: 400, color: '#818CF8' },
                    { name: 'Poor', value: 100, color: '#C7D2FE' }
                ],
                most_failed_subject: ["ATD", "ROB"],
                most_passed_subject: ["CAD", "IE"]
            },
            sem2: {
                data: [
                    { name: 'Above average', value: 450, color: '#4F46E5' },
                    { name: 'Average', value: 350, color: '#818CF8' },
                    { name: 'Poor', value: 100, color: '#C7D2FE' }
                ],
                most_failed_subject: ["CFD", "MFS"],
                most_passed_subject: ["PD", "QE"]
            }
        }
    }
};
