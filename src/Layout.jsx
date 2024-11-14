import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
    const [expanded, setExpanded] = useState(true);
    return (
        <div className="flex pl-4 overflow-hidden h-screen ">
            <Sidebar expanded={expanded} setExpanded={setExpanded} />
            <main className={`flex-1 ${expanded ? " ml-[200px]" : "ml-16"} overflow-y-auto min-h-screen p-4 bg-white`}>
                {children}
            </main>
        </div>
    );
};
export default Layout;
