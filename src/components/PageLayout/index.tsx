import { Header } from '..';
import './pagelayout.css';

interface IPL {
    children?: React.ReactNode;
}

export function PageLayout({ children }: IPL) {

    return (
        <>
            <div className="app">
                <header className="appheader">
                    <Header />
                </header>
                <main className="appmain">
                    {children}
                </main>
                <footer className="appfooter">
                    Copyright<span>&copy;</span> Habitat for Humanity Tucson 2023
                </footer>
            </div>
        </>
    )
}