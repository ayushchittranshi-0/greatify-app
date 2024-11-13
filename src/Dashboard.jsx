import Navigation from "./Navigation";
import GraphCard from "./GraphCard";
import StudentTable from "./Table";

const Dashboard = () => {
    return (
        <>
            <div className='rounded-t-xl bg-gray-100'>
                <Navigation />
                <GraphCard />
            </div>
            <div className='mt-4 bg-gray-100 text-sm'>
                <StudentTable/>
            </div>
        </>
    );
};

export default Dashboard;
