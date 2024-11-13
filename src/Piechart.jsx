import React from 'react';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PiechartCustom = ({ data:newData, title, subHeading,status, bottomJsx ,branch,course, semester}) => {

    console.log("course,branch,semester", course,branch,semester);
    const data = newData[course][branch][semester].data;
    console.log("data", data);

    return (

        <Card className=" shadow-none border-0 rounded-none col-span-2">
            <CardHeader className="border-b border-gray-200 space-y-0 px-4 pt-4 pb-2">
                <CardTitle className="text-content-green-dark text-lg mb-0.5">{title}</CardTitle>
                <div className="flex gap-4 text-xs text-gray-400 font-semibold">
                    <span>{subHeading}</span>
                </div>
            </CardHeader>
            <CardContent className="p-0 pt-4 pb-0 ">
                <div className="flex justify-start gap-4 px-4">
                    {data.map((entry, index) => (
                        <div key={`legend-${index}`} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 "
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-xs text-gray-600">{entry.name}</span>
                        </div>
                    ))}
                </div>
                <div className="relative flex items-center justify-center px-4">

                    <PieChart width={300} height={300}>
                        <Tooltip />
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                            <Label
                                content={({ viewBox }) => {
                                    const { cx, cy } = viewBox;
                                    return (
                                        <>
                                            <text
                                                x={cx}
                                                y={cy - 10}
                                                textAnchor="middle"
                                                dominantBaseline="central"
                                                className="font-medium text-xl"
                                            >
                                                {status}
                                            </text>
                                            <text
                                                x={cx}
                                                y={cy + 10}
                                                textAnchor="middle"
                                                dominantBaseline="central"
                                                className="fill-gray-500 text-sm"
                                            >
                                                Status
                                            </text>
                                        </>
                                    );
                                }}
                            />
                        </Pie>
                    </PieChart>
                </div>
                {bottomJsx}
            </CardContent>
        </Card>
    );
};

export default PiechartCustom;

