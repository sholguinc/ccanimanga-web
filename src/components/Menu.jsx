import Image from "next/image";
import { concat } from "../utils";
import { useContext } from "react";
import { MenuContext } from "./MenuContext";

const Menu = () => {
    const { menu } = useContext(MenuContext);

    return (
        <section className={
            concat("bg-transparent fixed top-0 left-0 w-full h-full px-0 z-50 sm:px-[40px] xl:px-[60px]",
                "flex items-center justify-start flex-col sm:flex-row gap-[1%] sm:gap-[5%] lg:gap-[8%] xl:gap-[10%]",
                menu ? "visible" : "invisible transition-[visibility] delay-[300ms]")
        }>
            <div className={
                concat("absolute top-0 left-0 bg-[url('/images/ccam/pattern.png')] w-full h-full animate-menuBg",
                    menu ? "animate-showBg": "animate-hideMenu opacity-0")
            }/>

            <figure className={
                concat("z-[40] m-0 aspect-w-2 aspect-h-1 sm:aspect-w-3 sm:aspect-h-1 w-[70%] sm:w-[30%] max-sm:mx-0",
                    menu ? "animate-showText": "animate-hideMenu opacity-0")
            }>
                <Image
                    src="/images/ccam/logo.png"
                    layout="fill"
                    objectFit="contain"
                    alt="ccam-logo"
                />
            </figure>

            <div className="z-[40] w-[55%]">
                <ul className={
                    concat("list-none font-jp font-semibold m-0 p-0",
                        "grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[40px]",
                        "text-[min(8vw,50px)] sm:text-[min(3vw,30px)] text-left cursor-pointer",
                        menu ? "[&>li]:animate-showText": "[&>li]:animate-hideMenu opacity-0")
                }>
                    <li>adafdfad</li>
                    <li>adfadfadf</li>
                    <li>adfadfadfadf</li>
                    <li>adafdfad</li>
                    <li>adfadfadf</li>
                    <li>adfadfadfadf</li>
                </ul>
            </div>
        </section>
    );
};

export default Menu;