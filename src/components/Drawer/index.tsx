import React from "react";
import './drawer.css';

interface IDrawer {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
    header?: string | null;
    width?: string  | null;
    height?: string  | null;
}

export function Drawer({ children, isOpen, setIsOpen, header, width, height }: IDrawer) {
    const widths:any = {
        fit: 'drawerfit',
        w25: 'drawerw25',
        screen: 'drawerscreen'
      }
    const heights:any = {
        fit: 'drawerfit-h',
        full: 'drawerfull'
    }
    const thisWidth = width ? width : "screen"; 
    const thisHeight = height ? height : "full"; 

    return (
        <main className={isOpen ? "drawershow drawermain" : "drawerhide drawermain"} >
            <section
                className={
                    ` ${widths[thisWidth]} ${heights[thisHeight]} drawercontent  ` +
                    (isOpen ? " drawercontentopen " : " drawercontentclose ")
                }
            >
                <article 
                className={`${widths[thisWidth]} drawerarticle`}>
                    {header && <header className="text-lg">{header}</header>}
                    {children}
                </article>
            </section>
            <section
                className="draweroutside"
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
