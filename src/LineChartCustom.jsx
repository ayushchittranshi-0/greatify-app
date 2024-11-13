import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Area,
    AreaChart,
    CartesianGrid,
} from 'recharts';
import { Tooltip } from 'chart.js';

const PerformanceChart = ({ title, subHeading, bottomJsx }) => {
    // Data points matching the image exactly
    const data = [
        { name: 'Sem 1', value: 60 },
        { name: 'Sem 2', value: 65 },
        { name: 'Sem 3', value: 55 },
        { name: 'Sem 4', value: 75 },
        { name: 'Sem 5', value: 78 },
        { name: 'Sem 6', value: 85 }
    ];

    return (
        <>
            <Card className=" shadow-none border-0 rounded-none col-span-2">
                <CardHeader className="space-y-0 px-4 pt-4 pb-2">
                    <CardTitle className="text-content-green-dark text-lg mb-0.5">{"Student Performance"}</CardTitle>
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
                                    data={data}
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
