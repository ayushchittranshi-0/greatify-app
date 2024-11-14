import { useState } from 'react';
import { Search, FileText, MoreVertical, ChevronDown } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import StudentReportModal from './StudentReportModal';

const StudentTable = () => {
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);



    const Sparkline = ({ type }) => (
        <svg className="w-16 h-8">
            <path
                d={
                    type === 'increase'
                        ? "M2,6 L6,4 L10,5 L14,3"
                        : "M2,3 L6,5 L10,4 L14,6"
                }
                stroke={type === 'increase' ? "#22c55e" : "#ef4444"}
                strokeWidth="1.5"
                fill="none"
            />
        </svg>
    );

    return (
        <>
            <div className="border border-gray-300 rounded-md">
                {/* Table Header */}
                <div className={ `p-4 flex items-center justify-between border-b pt-8 w-full overflow-x-auto

thin-scrollbar
            [&::-webkit-scrollbar]:h-1.5
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-track]:rounded-full
            scrollbar-thin
            scrollbar-track-gray-100
` }>
                    <span className="text-sm text-gray-500">3 results found</span>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-9 pr-3 py-1.5 bg-inherit border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-700"
                            />
                        </div>
                        <Select defaultValue="btech">
                            <SelectTrigger className="bg-inherit border-gray-300 w-[120px]">
                                <SelectValue>B.Tech</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="btech">B.Tech</SelectItem>
                                <SelectItem value="mtech">M.Tech</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="columns">
                            <SelectTrigger className="bg-inherit border-gray-300 w-[120px]">
                                <SelectValue>Columns</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="columns">Columns</SelectItem>
                            </SelectContent>
                        </Select>
                        <button className="p-1.5 hover:bg-gray-100 rounded-md">
                            <MoreVertical className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className={ `bg-primary-bg-green overflow-x-auto mt-4 mx-4 rounded-md` }>
                    <Table>
                        <TableHeader>
                            <TableRow className="text-xs bg-inherit hover:bg-inherit">
                                <TableHead className="w-[30px] text-gray-300 font-semibold"><input type="checkbox" /></TableHead>
                                <TableHead className="text-gray-300 font-semibold">S. NO.</TableHead>
                                <TableHead className="text-gray-300 font-semibold">ID</TableHead>
                                <TableHead className="text-gray-300 font-semibold">NAME</TableHead>
                                <TableHead className="text-gray-300 font-semibold">COURSE</TableHead>
                                <TableHead className="text-gray-300 font-semibold">YEAR</TableHead>
                                <TableHead className="text-gray-300 font-semibold">SEM</TableHead>
                                <TableHead className="text-gray-300 font-semibold">ATTENDANCE</TableHead>
                                <TableHead className="text-gray-300 font-semibold">GPA</TableHead>
                                <TableHead className="text-gray-300 font-semibold">PROGRESS</TableHead>
                                <TableHead className="text-gray-300 font-semibold">RANK</TableHead>
                                <TableHead className="text-gray-300 font-semibold">RISK ALERT</TableHead>
                                <TableHead className="text-gray-300 font-semibold">VIEW</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="bg-white text-xs">
                            {students.map((student, index) => (
                                <TableRow key={student.id} className="hover:bg-gray-50">
                                    <TableCell><input type="checkbox" /></TableCell>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className="text-green-500 font-medium">{student.id}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.course}</TableCell>
                                    <TableCell>{student.year}</TableCell>
                                    <TableCell>{student.sem}</TableCell>
                                    <TableCell>
                                        {(() => {
                                            const [attended, absent] = student.attendance.split('/').map(Number);
                                            const percentage = (attended / (attended + absent) * 100).toFixed(1);
                                            return `${percentage}%`;
                                        })()}
                                    </TableCell>
                                    <TableCell>{student.gpa}</TableCell>
                                    <TableCell className="space-x-2 flex">
                                        <Sparkline type={student.progressType} />
                                        <span className="text-green-500">{student.progress}</span>
                                    </TableCell>
                                    <TableCell>{student.rank}</TableCell>
                                    <TableCell>
                                        <span className={`px-3 py-1 rounded-full text-sm ${student.riskAlert === 'Low'
                                            ? 'bg-green-100 text-green-800'
                                            : student.riskAlert === 'Medium'
                                                ? 'bg-purple-100 text-purple-800'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            {student.riskAlert}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <button
                                            onClick={() => {
                                                setSelectedStudent(student);
                                                setIsModalOpen(true);
                                            }}
                                            className="flex items-center gap-2 text-content-bg-green">
                                            <FileText className="w-8 h-8 p-2 rounded-md border border-gray-300" />
                                            Report
                                        </button>
                                    </TableCell>

                                    <TableCell>
                                        <button className="p-1.5 hover:bg-gray-100 rounded-md">
                                            <MoreVertical className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Table Footer */}
                <div className="p-4 flex items-center justify-between border-t">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={dense}
                            onChange={(e) => setDense(e.target.checked)}
                            className="rounded"
                        />
                        <span className="text-sm text-gray-500">Dense</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <Select
                            value={rowsPerPage.toString()}
                            onValueChange={(value) => setRowsPerPage(parseInt(value))}
                        >
                            <SelectTrigger className="bg-inherit border-gray-300 w-[180px]">
                                <SelectValue>{rowsPerPage} rows per page</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5">5 rows per page</SelectItem>
                                <SelectItem value="10">10 rows per page</SelectItem>
                                <SelectItem value="20">20 rows per page</SelectItem>
                            </SelectContent>
                        </Select>
                        <span>01-10</span>
                    </div>
                </div>

                <div className='flex py-4 gap-2 items-center justify-center'>
                    <p className='text-base text-gray-500 text-semibold'>Powered By</p>
                    <img
                        id="greatify-image"
                        src="/greatify.png"
                        alt="greatify"
                        className='h-6 w-auto'
                    />
                </div>
            </div>

            <StudentReportModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                student={selectedStudent}
                studentData={selectedStudent}
            />
        </>
    );
};

export default StudentTable;

const students = [
    {
        id: 'D846',
        name: 'Raj Kumar',
        course: 'B.Tech',
        year: '1st yr',
        sem: '2nd sem',
        gpa: '2.4',
        progress: '5%',
        progressType: 'decrease',
        rank: '30th',
        riskAlert: 'High',
        affiliationNo: "1005",
        studentId: "STU000012",
        batch: "2017",
        branch: "CSE",
        attendance: "6/4",
        subjectPerformance: {
            "Sem 1": [
                { name: "Mathematics 1", score: 85 },
                { name: "Physics", score: 78 },
                { name: "Chemistry", score: 82 },
                { name: "Basic Electrical Engineering", score: 75 },
                { name: "Professional Communication", score: 88 },
                { name: "Programming & Problem Solving", score: 80 },
                { name: "Engineering Graphics & Design", score: 85 },
                { name: "Environmental Science", score: 90 }
            ],
            "Sem 2": [
                { name: "Mathematics 2", score: 82 },
                { name: "Data Structures & Algorithms", score: 75 },
                { name: "Digital Logic Design", score: 78 },
                { name: "Computer Organization & Architecture", score: 70 },
                { name: "Database Management Systems", score: 85 },
                { name: "Operating Systems", score: 80 },
                { name: "Probability & Statistics", score: 88 },
                { name: "Discrete Mathematical Structures", score: 76 }
            ],
            "Sem 3": [
                { name: "Mathematics 3", score: 75 },
                { name: "Computer Networks", score: 82 },
                { name: "Software Engineering", score: 85 },
                { name: "Theory of Computation", score: 70 },
                { name: "Computer Graphics", score: 78 },
                { name: "Formal Languages & Automata", score: 72 },
                { name: "Web Development", score: 88 },
                { name: "Machine Learning", score: 85 }
            ],
            "Sem 4": [
                { name: "Artificial Intelligence", score: 85 },
                { name: "Compiler Design", score: 78 },
                { name: "Software Testing", score: 82 },
                { name: "Cloud Computing", score: 90 },
                { name: "Internet of Things", score: 85 },
                { name: "Blockchain Technology", score: 76 },
                { name: "Data Engineering", score: 80 },
                { name: "Natural Language Processing", score: 88 }
            ],
            "Sem 5": [
                { name: "Deep Learning", score: 88 },
                { name: "Computer Vision", score: 82 },
                { name: "Distributed Systems", score: 85 },
                { name: "High Performance Computing", score: 78 },
                { name: "Information Retrieval", score: 90 },
                { name: "Knowledge Engineering", score: 85 },
                { name: "Reinforcement Learning", score: 80 },
                { name: "Big Data Analytics", score: 86 }
            ],
            "Sem 6": [
                { name: "Competitive Programming", score: 90 },
                { name: "Data Analytics", score: 85 },
                { name: "Ethical Hacking & Security", score: 82 },
                { name: "Quantum Computing", score: 88 },
                { name: "Real-Time Systems", score: 85 },
                { name: "Software Project Engineering", score: 80 },
                { name: "Green Computing", score: 78 },
                { name: "Data Visualization", score: 92 }
            ]
        },
        skills: [
            "Problem Solving",
            "Time Management",
            "Emotional Intelligence",
            "Collaboration",
            "Adaptability",
            "Research Skills"
        ]
    },
    {
        id: 'D847',
        name: 'Priya Sharma',
        course: 'B.Tech',
        year: '1st yr',
        sem: '2nd sem',
        gpa: '7.8',
        progress: '-2%',
        progressType: 'decrease',
        rank: '25th',
        riskAlert: 'Medium',
        affiliationNo: "1006",
        studentId: "STU000013",
        batch: "2017",
        branch: "CSE",
        attendance: "38/50",
        subjectPerformance: {
            "Sem 1": [
                { name: "Mathematics 1", score: 82 },
                { name: "Physics", score: 75 },
                { name: "Chemistry", score: 80 },
                { name: "Basic Electrical Engineering", score: 88 },
                { name: "Professional Communication", score: 85 },
                { name: "Programming & Problem Solving", score: 90 },
                { name: "Engineering Graphics & Design", score: 78 },
                { name: "Environmental Science", score: 85 }
            ],
            "Sem 2": [
                { name: "Mathematics 2", score: 80 },
                { name: "Data Structures & Algorithms", score: 75 },
                { name: "Digital Logic Design", score: 82 },
                { name: "Computer Organization & Architecture", score: 88 },
                { name: "Database Management Systems", score: 76 },
                { name: "Operating Systems", score: 85 },
                { name: "Probability & Statistics", score: 78 },
                { name: "Discrete Mathematical Structures", score: 84 }
            ],
            "Sem 3": [
                { name: "Mathematics 3", score: 78 },
                { name: "Computer Networks", score: 85 },
                { name: "Software Engineering", score: 82 },
                { name: "Theory of Computation", score: 75 },
                { name: "Computer Graphics", score: 80 },
                { name: "Formal Languages & Automata", score: 76 },
                { name: "Web Development", score: 85 },
                { name: "Machine Learning", score: 82 }
            ],
            "Sem 4": [
                { name: "Artificial Intelligence", score: 80 },
                { name: "Compiler Design", score: 75 },
                { name: "Software Testing", score: 85 },
                { name: "Cloud Computing", score: 88 },
                { name: "Internet of Things", score: 82 },
                { name: "Blockchain Technology", score: 78 },
                { name: "Data Engineering", score: 85 },
                { name: "Natural Language Processing", score: 80 }
            ],
            "Sem 5": [
                { name: "Deep Learning", score: 85 },
                { name: "Computer Vision", score: 80 },
                { name: "Distributed Systems", score: 82 },
                { name: "High Performance Computing", score: 75 },
                { name: "Information Retrieval", score: 88 },
                { name: "Knowledge Engineering", score: 82 },
                { name: "Reinforcement Learning", score: 78 },
                { name: "Big Data Analytics", score: 85 }
            ],
            "Sem 6": [
                { name: "Competitive Programming", score: 88 },
                { name: "Data Analytics", score: 82 },
                { name: "Ethical Hacking & Security", score: 85 },
                { name: "Quantum Computing", score: 80 },
                { name: "Real-Time Systems", score: 82 },
                { name: "Software Project Engineering", score: 78 },
                { name: "Green Computing", score: 85 },
                { name: "Data Visualization", score: 88 }
            ]
        },
        skills: [
            "Programming",
            "Data Structures",
            "Problem Solving",
            "Project Management",
            "Communication",
            "Analytical Skills"
        ]
    },
    {
        id: 'D848',
        name: 'Sunil Patel',
        course: 'B.Tech',
        year: '1st yr',
        sem: '2nd sem',
        gpa: '8.9',
        progress: '+8%',
        progressType: 'increase',
        rank: '5th',
        riskAlert: 'Low',
        affiliationNo: "1007",
        studentId: "STU000014",
        batch: "2017",
        branch: "CSE",
        attendance: "45/50",
        subjectPerformance: {
            "Sem 1": [
                { name: "Mathematics 1", score: 90 },
                { name: "Physics", score: 85 },
                { name: "Chemistry", score: 88 },
                { name: "Basic Electrical Engineering", score: 82 },
                { name: "Professional Communication", score: 92 },
                { name: "Programming & Problem Solving", score: 95 },
                { name: "Engineering Graphics & Design", score: 88 },
                { name: "Environmental Science", score: 85 }
            ],
            "Sem 2": [
                { name: "Mathematics 2", score: 88 },
                { name: "Data Structures & Algorithms", score: 92 },
                { name: "Digital Logic Design", score: 85 },
                { name: "Computer Organization & Architecture", score: 80 },
                { name: "Database Management Systems", score: 90 },
                { name: "Operating Systems", score: 88 },
                { name: "Probability & Statistics", score: 85 },
                { name: "Discrete Mathematical Structures", score: 82 }
            ],
            "Sem 3": [
                { name: "Mathematics 3", score: 92 },
                { name: "Computer Networks", score: 88 },
                { name: "Software Engineering", score: 90 },
                { name: "Theory of Computation", score: 85 },
                { name: "Computer Graphics", score: 88 },
                { name: "Formal Languages & Automata", score: 85 },
                { name: "Web Development", score: 95 },
                { name: "Machine Learning", score: 90 }
            ],
            "Sem 4": [
                { name: "Artificial Intelligence", score: 95 },
                { name: "Compiler Design", score: 88 },
                { name: "Software Testing", score: 92 },
                { name: "Cloud Computing", score: 95 },
                { name: "Internet of Things", score: 90 },
                { name: "Blockchain Technology", score: 88 },
                { name: "Data Engineering", score: 92 },
                { name: "Natural Language Processing", score: 94 }
            ],
            "Sem 5": [
                { name: "Deep Learning", score: 95 },
                { name: "Computer Vision", score: 92 },
                { name: "Distributed Systems", score: 88 },
                { name: "High Performance Computing", score: 90 },
                { name: "Information Retrieval", score: 94 },
                { name: "Knowledge Engineering", score: 92 },
                { name: "Reinforcement Learning", score: 88 },
                { name: "Big Data Analytics", score: 95 }
            ],
            "Sem 6": [
                { name: "Competitive Programming", score: 98 },
                { name: "Data Analytics", score: 95 },
                { name: "Ethical Hacking & Security", score: 92 },
                { name: "Quantum Computing", score: 90 },
                { name: "Real-Time Systems", score: 94 },
                { name: "Software Project Engineering", score: 92 },
                { name: "Green Computing", score: 88 },
                { name: "Data Visualization", score: 96 }
            ]
        },
        skills: [
            "Programming",
            "Data Structures",
            "Algorithms",
            "Database Management",
            "Web Development",
            "Problem Solving"
        ]
    }
];
