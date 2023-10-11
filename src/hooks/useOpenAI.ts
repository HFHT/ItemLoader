// deprecated model: text-davinci-003

import { useState } from "react";

export function useOpenAI() {
    const [chatGPT, setChatGPT] = useState<string | null>();

    const getChatGPT = async (userData: any) => {
        // if (!chatGPT) return;
        console.log(userData)
        const headers = new Headers();

        const url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTChatGPT`;

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                model: import.meta.env.VITE_GPT_MODEL,
                prompt: userData,
                temperature: 0.2,
                max_tokens: 105
            })
        };
        if (!userData) return;
        try {
            // const response = await fetch(url, options);
            // const gptResponse = (await response.json());
            // console.log(gptResponse);
            // console.log(gptResponse.choices[0].text)
            // // checkStatusCode(gptResponse.status);
            // setChatGPT(gptResponse.choices[0].text);

            try {
                fetch(url, options)
                    .then(response => response.json())
                    .then(data => { setChatGPT(data.choices[0].text) })
                    .catch(error => console.log(error))
            }
            catch (error) {
                console.log(error);
            }

        }
        catch (error) {
            console.log(error);
        }
    }

    const resetGPT = (doIt: boolean) => {
        if (!doIt) return
        console.log('resetGPT')
        setChatGPT('')
    }

    return [chatGPT, getChatGPT, resetGPT];
}