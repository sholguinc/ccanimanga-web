import React from "react";
import SimpleBar from "simplebar-react";
import Sidebar from "./Sidebar";
import Footer from "./Footer"
import CollapsedSidebar from "./CollapsedSidebar";
import Menu from "./Menu";

import 'simplebar/dist/simplebar.min.css';


const Layout = ({ children }) => {
    const scrollableNodeRef = React.createRef();

    return (
        <>
            <Menu/>
            <section className="w-full h-full">
                <Sidebar/>
                <CollapsedSidebar/>
                <main className="w-full sm:right-[80px] sm:w-[calc(100%-80px)]">
                    <SimpleBar scrollableNodeProps={{ ref: scrollableNodeRef }} autoHide={true}
                               style={{ maxHeight: '100vh' }} scrollbarMinSize={150}>
                        {children}
                        <Footer scrollableNodeRef={scrollableNodeRef}/>
                    </SimpleBar>
                </main>
            </section>
        </>
    );
};

export default Layout;
