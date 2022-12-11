import { concat } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

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
            <div className="w-full h-full flex items-center justify-center">
                <ul className={
                    concat("flex",
                        "divide-x-[1px] divide-y-0 divide-black divide-solid",
                        "list-none font-jp font-medium text-xs",
                        "[&>li]:px-[10px] [&>li]:my-auto [&>li>a]:no-underline [&>li>a]:text-black")}
                >
                    <li>
                        <a href="https://www.facebook.com/ccam.uni.pe" target="_blank" rel="noopener noreferrer">
                            <p className="hover:underline">
                                CCAM
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ceculturaluni/" target="_blank" rel="noopener noreferrer">
                            <p className="hover:underline">
                                CENTRO CULTURAL UNI
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.uni.edu.pe/" target="_blank" rel="noopener noreferrer">
                            <p className="hover:underline">
                                UNIVERSIDAD NACIONAL DE INGENIERÍA
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="absolute top-1/2 left-[40px] -translate-y-1/2">
                <a onClick={scrollBack}>
                    <div className="flex items-center justify-center bg-ccam-red
                    w-[50px] h-[50px] xsm:w-[70px] xsm:h-[70px]
                    rounded-full cursor-pointer hover:animate-scrollTop">
                        <FontAwesomeIcon icon={faAngleUp} className="w-[60%] h-[60%] text-white"/>
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
