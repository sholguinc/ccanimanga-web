import {useContext} from "react";
import Hamburger from 'hamburger-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { MenuContext } from "./MenuContext";


const Sidebar = () => {
    const {menu, setMenu} = useContext(MenuContext);

    return (
        <aside className="hidden m-0 block bg-ccam-red fixed top-0 right-0 w-[80px] h-full z-[100] sm:block">
            {/* Menu */}
            <div className="absolute bottom-[50%] right-[50%] translate-x-2/4 translate-y-2/4">
                <Hamburger size={45} toggled={menu} toggle={setMenu} direction="left" duration={0.4} color="white" rounded/>
            </div>

            {/* Social Media */}
            <div className="absolute bottom-[30px] w-full">
                <p className="font-myFont font-bold text-white rotate-90 m-0 mb-[32px]">
                    Síguenos
                </p>
                <ul className="mx-auto my-0 p-0 list-none w-[30px]">
                    <li>
                        <a href="https://www.facebook.com/ccam.uni.pe" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center justify-center bg-white w-[30px] h-[30px] rounded-full">
                                <FontAwesomeIcon icon={faFacebook} className="w-[65%] h-[65%] text-ccam-red"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ccam.uni/" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center justify-center bg-white w-[30px] h-[30px] rounded-full mt-[6px]">
                                <FontAwesomeIcon icon={faInstagram} className="w-[65%] h-[65%] text-ccam-red"/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;