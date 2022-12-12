import {useContext} from "react";
import Hamburger from 'hamburger-react'
import {MenuContext} from "./MenuContext";

const CollapsedSidebar = () => {
    const {menu, setMenu} = useContext(MenuContext);

    return (
        <aside className="sm:hidden m-0 block bg-ccam-red fixed top-0 right-0 w-[50px] h-[50px] z-[100] rounded-bl-full">
            {/* Menu */}
            <div className="absolute bottom-[60%] right-[40%] translate-x-2/4 translate-y-2/4">
                <Hamburger size={28} toggled={menu} toggle={setMenu} direction="left" duration={0.4} color="white" rounded/>
            </div>
        </aside>
    );
};

export default CollapsedSidebar;