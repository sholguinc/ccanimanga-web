import { createContext, useState } from "react";

const defaultValue = {
    menu: false,
};

export const MenuContext = createContext(defaultValue);

export function MenuContextProvider(props) {
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(!menu);
    };

    return (
        <MenuContext.Provider
            value={{
                menu,
                setMenu,
                openMenu,
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
}
