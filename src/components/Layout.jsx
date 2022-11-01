import Sidebar from "./Sidebar";
import CollapsedMenu from "./CollapsedMenu";

const Layout = ({ children }) => {
    return (
        <>
            <section className="w-full h-full">
                <Sidebar/>
                <CollapsedMenu/>
                <main className="w-full sm:right-[80px] sm:w-[calc(100%-80px)]">
                    {children}
                </main>
            </section>
        </>
    );
};

export default Layout;
