import SimpleBar from "simplebar-react";
import Sidebar from "./Sidebar";
import CollapsedMenu from "./CollapsedMenu";

import 'simplebar/dist/simplebar.min.css';

const Layout = ({ children }) => {
    return (
        <>
            <section className="w-full h-full">
                <Sidebar/>
                <CollapsedMenu/>
                <main className="w-full sm:right-[80px] sm:w-[calc(100%-80px)]">
                    <SimpleBar autoHide={true} style={{ maxHeight: '100vh' }} scrollbarMinSize={150}>
                        {children}
                    </SimpleBar>
                </main>
            </section>
        </>
    );
};

export default Layout;
