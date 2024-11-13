import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="flex pl-4 overflow-hidden h-screen ">
            <Sidebar />
            <main className="flex-1 ml-[200px] overflow-y-auto min-h-screen p-4 bg-white">
                {children}
            </main>
        </div>
    );
};
export default Layout;
