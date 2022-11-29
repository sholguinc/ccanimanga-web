// nav bar that hiddens when size is small
// and shows when size is large

const NavBar = () => {
    return (
        // If navbar is in top change to static and if navbar is in bottom change to sticky

        <>
            <nav className="fixed sticky top-0 left-0 w-full h-16 bg-white shadow-md z-50">
                <div className="w-full h-full flex items-center justify-between px-4">
                    <div className="w-1/2 h-full flex items-center">
                        <p>fesfse</p>
                    </div>
                </div>
            </nav>        
        </>
    );
};

export default NavBar;