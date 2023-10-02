import './openai.css';

import { useEffect, useState } from "react"
import { useOpenAI } from "../../hooks"
import { Button } from "../Button"
import { CONST_GPT_PROD, CONST_GPT_PROMPT } from '../../constants';
import { parseGPT } from '../../helpers/functions';

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
        if (isOpen && userData.result.desc === '') {
            console.log('getOpenAI', userData)
            getGPT(buildPrompt())
            // getGPT(`${CONST_GPT_PROD} ${userData.result.condition} with some ${userData.result.conditionAdds} ${userData.result.seo} ${userData.result.attr1} ${userData.result.attr2} ${userData.result.qty && userData.result.qty > 0 ? userData.result.qty + ' sq ft' : ''} ${userData.result.prods.length > 1 ? userData.result.prods.length + ' piece' : ''} ${getProducts()} ${userData.result.finish}`)
            // setToggle(false)
        }
    }, [isOpen])

    function getOpenAI() {
        console.log('getOpenAI', userData)
        getGPT(buildPrompt())
        // getGPT(`${CONST_GPT_PROD} ${userData.result.condition} with some ${userData.result.conditionAdds} ${userData.result.seo} ${userData.result.attr1} ${userData.result.attr2} ${userData.result.qty && userData.result.qty > 0 ? userData.result.qty + ' sq ft' : ''} ${userData.result.prods.length > 1 ? userData.result.prods.length + ' piece' : ''} ${getProducts()} ${userData.result.finish}`)
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
                        Title: {parseGPT(gpt, 0)}
                    </div>
                    <div className="aitext">
                        Description: {parseGPT(gpt, 1)}
                    </div>
                    <div className='aicontrols'>
                        <Button onClick={() => getOpenAI()} disabled={disable} classes='aibutton'>Generate</Button>
                        <Button onClick={() => handleAccept()} disabled={false} classes='aibutton'>&nbsp;&nbsp;Accept&nbsp;</Button>
                    </div>
                </>
            }
        </div>
    );

    function getProducts() {
        console.log(userData.result)
        if (userData.result.prod !== '') { return userData.result.prod }
        let theProds = '';
        userData.result.prods.forEach(p => {
            console.log(p)
            if (p.qty === 1) { theProds = theProds + `${p.prod},` }
            if (p.qty === 2) { theProds = theProds + `a pair of ${p.prod},` }
            if (p.qty > 2) { theProds = theProds + `a set of ${p.qty} ${p.prod},` }
        })
        return theProds
    }

    function buildPrompt() {
        let thePrompt = CONST_GPT_PROMPT
        thePrompt = thePrompt.replace(/{seo}/g, userData.result.seo).replace(/{products}/g, getProducts).replace(/{sqft}/g, userData.result.qty && userData.result.qty > 0 ? userData.result.qty + ' sq ft' : '')
        thePrompt = thePrompt.replace(/{condition}/g, userData.result.condition).replace(/{flaw}/g, userData.result.conditionAdds).replace(/{pieces}/g, userData.result.prods.length > 1 ? userData.result.prods.length + ' piece' : '')
        thePrompt = thePrompt.replace(/{attr1}/g, userData.result.attr1).replace(/{attr2}/g, userData.result.attr2).replace(/{finish}/g, userData.result.finish)
        console.log(thePrompt)
        return thePrompt
    }

}


