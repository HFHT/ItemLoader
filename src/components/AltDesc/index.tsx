import { Button, Header } from '..';
import './altdesc.css';

interface IPL {
    isOpen: boolean;
    disable: boolean;
    userData: string | undefined;
    setResult: Function;
    children?: React.ReactNode;
}

export function AltDesc({ isOpen, disable, userData, setResult, children }: IPL) {
    function handleAccept() {
        setResult(userData);
    }
    return (
        <>
        {isOpen && userData && 
        <div>
            {userData}
            <Button onClick={() => handleAccept()} disabled={disable} classes='aibutton'>&nbsp;&nbsp;Accept&nbsp;</Button>

            </div>}

        </>
    )
}