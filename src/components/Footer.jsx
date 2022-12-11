import { concat } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ scrollableNodeRef }) => {
    const scrollBack = () => {
        scrollableNodeRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
            duration: 100000000000,
        })
    }

    return (
        <footer className="relative bottom-0 bg-transparent h-[150px]">
            <div className="w-full h-full flex items-center justify-center mt-[10px]">
                <div>
                    <div className="sm:hidden w-full my-0 h-min list-none flex items-center justify-center gap-[15px] -translate-y-2/3">
                        <div>
                            <a href="https://www.facebook.com/ccam.uni.pe" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-ccam-red w-[30px] h-[30px] rounded-full">
                                    <FontAwesomeIcon icon={faFacebook} className="w-[65%] h-[65%] text-white"/>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/ccam.uni/" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-ccam-red w-[30px] h-[30px] rounded-full">
                                    <FontAwesomeIcon icon={faInstagram} className="w-[65%] h-[65%] text-white"/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <ul className={
                        concat("flex m-0 h-min",
                            "divide-x-[1px] divide-y-0 divide-black divide-solid",
                            "list-none font-jp font-medium text-[11px]",
                            "[&>li]:px-[10px] [&>li]:my-auto [&>li>a]:no-underline [&>li>a]:text-black")}
                    >
                        <li>
                            <a href="https://www.facebook.com/ccam.uni.pe" target="_blank" rel="noopener noreferrer">
                                <p className="hover:underline my-0">
                                    CCAM
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ceculturaluni/" target="_blank" rel="noopener noreferrer">
                                <p className="hover:underline my-0">
                                    CENTRO CULTURAL UNI
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.uni.edu.pe/" target="_blank" rel="noopener noreferrer">
                                <p className="hover:underline my-0">
                                    UNIVERSIDAD NACIONAL DE INGENIERÍA
                                </p>
                            </a>
                        </li>
                    </ul>

                    <p className="mt-[15px] mb-0 mx-auto text-center text-black font-jp font-light text-[10px]">
                        Lima, Perú
                    </p>
                </div>
            </div>

            <div className="absolute top-1/2 left-[38px] -translate-y-[55%]">
                <a onClick={scrollBack}>
                    <div className="flex items-center justify-center bg-ccam-red
                    w-[50px] h-[50px] xsm:w-[70px] xsm:h-[70px]
                    rounded-full cursor-pointer sm:hover:animate-scrollTop">
                        <FontAwesomeIcon icon={faAngleUp} className="w-[60%] h-[60%] text-white"/>
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
