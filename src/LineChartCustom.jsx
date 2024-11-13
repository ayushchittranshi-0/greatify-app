import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    XAxis,
    YAxis,
    ResponsiveContainer,
    Area,
    AreaChart,
    CartesianGrid,
} from 'recharts';
import { Tooltip } from 'chart.js';

const PerformanceChart = ({ performanceSemester, setPerformanceSemester, bottomJsx, branch, course }) => {

    const semesterPerformanceData = {
        btech: {
            cse: {
                data: [
                    { name: 'Sem 1', value: 75 },
                    { name: 'Sem 2', value: 82 },
                    { name: 'Sem 3', value: 78 },
                    { name: 'Sem 4', value: 85 },
                    { name: 'Sem 5', value: 88 },
                    { name: 'Sem 6', value: 92 }
                ],
            },
            mechanical: {
                data: [
                    { name: 'Sem 1', value: 70 },
                    { name: 'Sem 2', value: 73 },
                    { name: 'Sem 3', value: 68 },
                    { name: 'Sem 4', value: 77 },
                    { name: 'Sem 5', value: 82 },
                    { name: 'Sem 6', value: 80 }
                ],
            }
        },
        mtech: {
            cse: {
                data: [
                    { name: 'Sem 1', value: 85 },
                    { name: 'Sem 2', value: 88 },
                    { name: 'Sem 3', value: 92 },
                    { name: 'Sem 4', value: 90 },
                    { name: 'Sem 5', value: 95 },
                    { name: 'Sem 6', value: 94 }
                ],
            },
            mechanical: {
                data: [
                    { name: 'Sem 1', value: 80 },
                    { name: 'Sem 2', value: 83 },
                    { name: 'Sem 3', value: 85 },
                    { name: 'Sem 4', value: 82 },
                    { name: 'Sem 5', value: 88 },
                    { name: 'Sem 6', value: 87 }
                ],
            }
        }
    };

    const getLimitedSemesterData = () => {
        const currentSem = parseInt(performanceSemester.replace('sem', ''));

        const branchData = semesterPerformanceData[course][branch];

        const limitedData = {
            ...branchData,
            data: branchData.data.filter((item) => {
                const semNumber = parseInt(item.name.replace('Sem ', ''));
                return semNumber <= currentSem;
            }),
        };

        return limitedData;
    };

    return (
        <>
            <Card className=" shadow-none border-0 rounded-none col-span-2">
                <CardHeader className="space-y-0 px-4 pt-4 pb-2">
                    <CardTitle className="flex justify-between text-content-green-dark text-lg mb-0.5">
                        <p>
                            {"Student Performance"}
                        </p>
                        <Select
                            value={performanceSemester}
                            onValueChange={(value) => setPerformanceSemester(value)}
                        >
                            <SelectTrigger className="w-[150px] bg-inherit border-gray-300">
                                <SelectValue>
                                    {performanceSemester === "sem1" ? "Semester 1" :
                                        performanceSemester === "sem2" ? "Semester 2" :
                                            performanceSemester === "sem3" ? "Semester 3" :
                                                performanceSemester === "sem4" ? "Semester 4" :
                                                    performanceSemester === "sem5" ? "Semester 5" :
                                                        "Semester 6"}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sem1">Semester 1</SelectItem>
                                <SelectItem value="sem2">Semester 2</SelectItem>
                                <SelectItem value="sem3">Semester 3</SelectItem>
                                <SelectItem value="sem4">Semester 4</SelectItem>
                                <SelectItem value="sem5">Semester 5</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardTitle>
                    <div className="flex gap-4 text-xs text-gray-400 font-semibold">
                        <span>Average Score: 255</span>
                        &#9679;
                        <span>5% Improvement</span>
                        &#9679;
                        <span>Average Grade: B</span>
                    </div>
                </CardHeader>
                <CardContent className="p-0 pt-4 pb-0 ">
                    <div className="relative flex flex-col items-center justify-center px-4">
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">

                                <AreaChart
                                    width={600}
                                    height={250}
                                    data={getLimitedSemesterData().data}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                        domain={[0, 100]}
                                        ticks={[0, 50, 100]}
                                        tickFormatter={(value) => `${value}%`}
                                    />

                                    {/* X-axis */}
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                        padding={{ left: 10, right: 10 }}
                                    />
                                    <Area
                                        type="linear"
                                        dataKey="value"
                                        stroke="#10B981"
                                        strokeWidth={2}
                                        fill="url(#greenGradient)"
                                        dot={{ fill: '#10B981', strokeWidth: 2 }}
                                        activeDot={{ r: 6, fill: '#10B981' }}
                                    />
                                    <Tooltip />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {bottomJsx}
                </CardContent>
            </Card>
        </>
    );
};

export default PerformanceChart;
