import './openai.css';

import { useEffect, useState } from "react"
import { useOpenAI } from "../../hooks"
import { Button } from "../Button"

interface ITile {
    isOpen: boolean
    disable: boolean
    userData: Itype
    setResult(e: string): Function | void
}

export const OpenAI = ({ isOpen, disable, userData, setResult }: ITile) => {
    // const [toggle, setToggle] = useState(true)
    const [isChat, setIsChat] = useState(false)
    const [gpt, getGPT, resetGPT]: any = useOpenAI()

    useEffect(() => {
        if (isOpen && userData.result.desc==='') {
            getGPT(`${userData.result.condition} with some ${userData.result.conditionAdds} ${userData.result.seo} ${userData.result.attr1} ${userData.result.attr2} ${userData.result.qty ? userData.result.qty + ' piece' : ''} ${userData.result.prod} ${userData.result.finish}`)
            // setToggle(false)
        }
    }, [isOpen])

    function getOpenAI() {
        getGPT(`${userData.result.condition} with some ${userData.result.conditionAdds} ${userData.result.seo} ${userData.result.attr1} ${userData.result.attr2} ${userData.result.qty ? userData.result.qty + ' piece' : ''} ${userData.result.prod} ${userData.result.finish}`)
        setIsChat(true)
    }
    function handleAccept() {
        setResult(gpt)
        resetGPT()
        // setToggle(true)
    }


    return (
        <div className='aimain'>
            {isOpen &&
                <>
                    <div className="aitext">
                        {gpt}
                    </div>


                    <div className='aicontrols'>
                        <Button onClick={() => getOpenAI()} disabled={disable} classes='aibutton'>Generate</Button>
                        <Button onClick={() => handleAccept()} disabled={false} classes='aibutton'>&nbsp;&nbsp;Accept&nbsp;</Button>
                    </div>
                </>
            }
        </div>
    );

}


