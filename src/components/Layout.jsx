import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <p>This is the header</p>
            <Sidebar/>
            <main>
                {children}
            </main>
            <p>This is the footer</p>
        </>
    );
};

export default Layout;
