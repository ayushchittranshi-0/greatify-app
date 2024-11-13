import  { useState } from 'react';
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

    const students = [
        {
            id: 'D846',
            name: 'Raj Kumar',
            course: 'B.Tech',
            year: '1st yr',
            sem: '2nd sem',
            attendance: '80%',
            gpa: '2.4',
            progress: '5%',
            progressType: 'decrease',
            rank: '30th',
            riskAlert: 'Medium'
        },
        {
            id: 'D847',
            name: 'Riya Shah',
            course: 'B.Tech',
            year: '1st yr',
            sem: '2nd sem',
            attendance: '60%',
            gpa: '3.5',
            progress: '8%',
            progressType: 'increase',
            rank: '12th',
            riskAlert: 'Low'
        },
        {
            id: 'D848',
            name: 'Manoj Shetty',
            course: 'B.Tech',
            year: '1st yr',
            sem: '2nd sem',
            attendance: '70%',
            gpa: '3',
            progress: '1%',
            progressType: 'increase',
            rank: '18th',
            riskAlert: 'Low'
        }
    ];

    // Mini sparkline component
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
                <div className="p-4 flex items-center justify-between border-b pt-8 w-full overflow-x-auto">
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
                <div className="bg-primary-bg-green overflow-x-auto mt-4 mx-4 rounded-md">
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
                                    <TableCell>{student.attendance}</TableCell>
                                    <TableCell>{student.gpa}</TableCell>
                                    <TableCell className="space-x-2 flex">
                                        <Sparkline type={student.progressType} />
                                        <span className="text-green-500">{student.progress}</span>
                                    </TableCell>
                                    <TableCell>{student.rank}</TableCell>
                                    <TableCell>
                                        <span className={`px-3 py-1 rounded-full text-sm 
                    ${student.riskAlert === 'Low'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-purple-100 text-purple-800'}`}>
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
            />
        </>
    );
};

export default StudentTable;
