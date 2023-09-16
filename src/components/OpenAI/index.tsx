// import { useState } from "react";

import { useEffect, useState } from "react"
import { useOpenAI } from "../../hooks"
import { Button } from "../Button"

interface ITile {
    isOpen: boolean
    userData: Itype
    setResult(e: string): Function | void
}

export const OpenAI = ({ isOpen, userData, setResult }: ITile) => {
    const [toggle, setToggle] = useState(true)
    const [isChat, setIsChat] = useState(false)
    const [gpt, getGPT]: any = useOpenAI()

    useEffect(() => {
        if (isOpen && toggle) {
            getGPT(`${userData.result.condition} with some ${userData.result.conditionAdds} ${userData.result.seo} ${userData.result.attr1} ${userData.result.attr2} ${userData.result.qty ? userData.result.qty + ' piece' : ''} ${userData.result.prod} ${userData.result.finish}`)
            setToggle(false)
        }
    }, [isOpen, toggle])

    function getOpenAI() {
        getGPT(`${userData.result.condition} with some ${userData.result.conditionAdds} ${userData.result.seo} ${userData.result.attr1} ${userData.result.attr2} ${userData.result.qty ? userData.result.qty + ' piece' : ''} ${userData.result.prod} ${userData.result.finish}`)
        setIsChat(true)
    }

    // useEffect(() => {
    //     if (gpt) {
    //         setResult(gpt)
    //     }
    // }, [gpt])
    return (
        <div className='aimain'>
            {isOpen &&
                <>
                    <div className="cattype">
                        {gpt}
                    </div>


                    <div className='photocontrols'>
                        <Button onClick={() => getOpenAI()} classes='photobtn'>Generate</Button>
                        <Button onClick={() => setResult(gpt)} classes='photobtn'>&nbsp;&nbsp;Accept&nbsp;</Button>
                    </div>
                </>
            }
        </div>
    );

}


