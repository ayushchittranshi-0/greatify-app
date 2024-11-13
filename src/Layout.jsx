import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="flex pl-4 overflow-hidden h-screen ">
            <Sidebar />
            <main className="flex-1 ml-[200px] overflow-y-auto">
                {children}
            </main>
        </div>
    );
};
export default Layout;
