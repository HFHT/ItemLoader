// deprecated model: text-davinci-003

import { useState } from "react";
import { fetchAndSetAll } from "../helpers/fetchAndSetAll";

export function useOpenAI() {
    const [chatTitle, setChatTitle] = useState<string | null>();
    const [chatDesc, setChatDesc] = useState<string | null>();

    const getChatGPT = async (userData: any) => {
        // if (!chatGPT) return;
        console.log(userData)
        if (!userData || userData.length !== 2) return;
        const headers = new Headers();

        const url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTChatGPT`;

        const optionsTitle = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                model: import.meta.env.VITE_GPT_MODEL,
                prompt: userData[0],
                temperature: 0.2,
                max_tokens: 105
            })
        };

        const optionsDesc = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                model: import.meta.env.VITE_GPT_MODEL,
                prompt: userData[1],
                temperature: 0.2,
                max_tokens: 105
            })
        };

        try {
            fetchAndSetAll([
                {
                    url: `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTChatGPT`,
                    init: optionsTitle,
                    setter: setChatTitle
                },
                {
                    url: `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTChatGPT`,
                    init: optionsDesc,
                    setter: setChatDesc
                }
            ])
        }
        catch (error) { console.log(error); alert('Read of ChatGPT failed: ' + error); }

        // try {
        //     const response = await fetch(url, options);
        //     console.log(response);
        //     if (!response.ok) throw `ChatGPT failed with ${response.status}: ${response.statusText}`
        //     const gptResponse = (await response.json());
        //     console.log(gptResponse);
        //     console.log(gptResponse.choices[0].text)
        //     // checkStatusCode(gptResponse.status);
        //     setChatGPT(gptResponse.choices[0].text);

        //     // try {
        //     //     fetch(url, options)
        //     //         .then(response => response.json())
        //     //         .then(data => { setChatGPT(data.choices[0].text) })
        //     //         .catch(error => console.log(error))
        //     // }
        //     // catch (error) {
        //     //     console.log(error);
        //     // }

        // }
        // catch (error) {
        //     console.log(error);
        //     alert(error);
        // }
    }

    const resetGPT = (doIt: boolean) => {
        if (!doIt) return
        console.log('resetGPT')
        setChatTitle('')
        setChatDesc('')
    }

    return [chatTitle, chatDesc, getChatGPT, resetGPT];
}