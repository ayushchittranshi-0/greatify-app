import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Search, Bell, Settings, User, ChevronDown } from 'lucide-react';

// Sample data for the charts
const attendanceData = [
  { name: 'Present', value: 70, color: '#10B981' },
  { name: 'Absent', value: 15, color: '#F97316' },
  { name: 'Late', value: 15, color: '#064E3B' }
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

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="text-xl">Welcome, Uma Nandini</span>
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-500" />
            <Bell className="w-5 h-5 text-gray-500" />
            <Settings className="w-5 h-5 text-gray-500" />
            <User className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 px-4 py-2">
          <span className="text-orange-500 border-b-2 border-orange-500 pb-2">Student</span>
          <span className="text-gray-500">Behaviour and Discipline</span>
          <span className="text-gray-500">Curriculum</span>
          <span className="text-gray-500">Extra-Curriculum Activity</span>
          <span className="text-gray-500">Health & Wellness</span>
          <span className="text-gray-500">Accessibility and Inclusivity Analysis</span>
          <span className="text-gray-500">System</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Students analysis overview</h1>
          <div className="flex gap-4">
            <Select>
              <div className="flex items-center gap-2">
                Sem 2 <ChevronDown className="w-4 h-4" />
              </div>
            </Select>
            <Select>
              <div className="flex items-center gap-2">
                B.Tech <ChevronDown className="w-4 h-4" />
              </div>
            </Select>
            <Select>
              <div className="flex items-center gap-2">
                CSE <ChevronDown className="w-4 h-4" />
              </div>
            </Select>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Attendance Card */}
          <Card>
            <CardHeader>
              <CardTitle>Student Attendance</CardTitle>
              <div className="text-sm text-gray-500">Total students: 17260</div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <PieChart width={200} height={200}>
                  <Pie
                    data={attendanceData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                  </Pie>
                </PieChart>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Frequently missed days:</span>
                  <span className="font-medium">WED, FRI</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span>Frequently attended days:</span>
                  <span className="font-medium">MON, TUE</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Summary</CardTitle>
              <div className="text-sm text-gray-500">Total students: 17260</div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <PieChart width={200} height={200}>
                  <Pie
                    data={academicData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                  >
                  </Pie>
                </PieChart>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Most Failed subject:</span>
                  <span className="font-medium">CHEMISTRY</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span>Most Passed subject:</span>
                  <span className="font-medium">MATHS</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Card */}
          <Card>
            <CardHeader>
              <CardTitle>Students Performance</CardTitle>
              <div className="flex gap-4 text-sm">
                <span>Average score: 255</span>
                <span>5% Improvement</span>
                <span>Average grade: B</span>
              </div>
            </CardHeader>
            <CardContent>
              <LineChart width={300} height={200} data={performanceData}>
                <XAxis dataKey="sem" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10B981" />
              </LineChart>
            </CardContent>
          </Card>
        </div>

        {/* Student Table */}
        <Card>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <span>3 results found</span>
              <div className="flex gap-4">
                <input type="text" placeholder="Search" className="px-3 py-1 border rounded" />
                <Select>
                  <div className="flex items-center gap-2">
                    B.Tech <ChevronDown className="w-4 h-4" />
                  </div>
                </Select>
                <Select>
                  <div className="flex items-center gap-2">
                    Columns <ChevronDown className="w-4 h-4" />
                  </div>
                </Select>
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">S. NO.</th>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">NAME</th>
                  <th className="px-4 py-2 text-left">COURSE</th>
                  <th className="px-4 py-2 text-left">YEAR</th>
                  <th className="px-4 py-2 text-left">SEM</th>
                  <th className="px-4 py-2 text-left">ATTENDANCE</th>
                  <th className="px-4 py-2 text-left">GPA</th>
                  <th className="px-4 py-2 text-left">PROGRESS</th>
                  <th className="px-4 py-2 text-left">RANK</th>
                  <th className="px-4 py-2 text-left">RISK ALERT</th>
                  <th className="px-4 py-2 text-left">VIEW</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student, index) => (
                  <tr key={student.id} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2 text-green-500">{student.id}</td>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.course}</td>
                    <td className="px-4 py-2">{student.year}</td>
                    <td className="px-4 py-2">{student.sem}</td>
                    <td className="px-4 py-2">{student.attendance}</td>
                    <td className="px-4 py-2">{student.gpa}</td>
                    <td className="px-4 py-2">{student.progress}</td>
                    <td className="px-4 py-2">{student.rank}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded ${
                        student.risk === 'Low' ? 'bg-green-100 text-green-800' :
                        student.risk === 'Medium' ? 'bg-purple-100 text-purple-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {student.risk}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500">Report</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Dense</span>
              </div>
              <div className="flex items-center gap-4">
                <span>10 rows per page</span>
                <span>01-10</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
