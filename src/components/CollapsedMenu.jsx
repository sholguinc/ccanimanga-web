import {useState} from "react";
import Hamburger from 'hamburger-react'

const CollapsedMenu = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <aside className="sm:hidden m-0 block bg-ccam-red fixed top-0 right-0 w-[50px] h-[50px] z-50 rounded-bl-full">
            {/* Menu */}
            <div className="absolute bottom-[60%] right-[40%] translate-x-2/4 translate-y-2/4">
                <Hamburger size={28} toggled={isOpen} toggle={setOpen} direction="left" duration={0.4} color="white" rounded/>
            </div>
        </aside>
    );
};

export default CollapsedMenu;