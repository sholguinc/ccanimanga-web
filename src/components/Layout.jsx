// Layout

const Layout = ({ children }) => {
    return (
        <>
            <p>This is the header</p>
            {children}
            <p>This is the footer</p>
        </>
    );
};

export default Layout;
