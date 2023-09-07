//

import { useState } from "react";

export function useOpenAI() {
    const [chatGPT, setChatGPT] = useState();

    const getChatGPT = async (prompt: any) => {
        // if (!chatGPT) return;

        const headers = new Headers();

        const url = `${import.meta.env.VITE_AZURE_FUNC_URL}/api/HFHTChatGPT`;

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                model: import.meta.env.VITE_GPT_MODEL,
                prompt: 'Write an informative, two or three sentences, product description for:\nVintage gently used Victorian style red couch',
                temperature: 0.44,
                max_tokens: 105
            })
        };
        try {
            const response = await fetch(url, options);
            const gptResponse = (await response.json());
            console.log(gptResponse);
            console.log(gptResponse.choices[0].text)
            // checkStatusCode(gptResponse.status);
            setChatGPT(gptResponse.choices[0].text);
        }
        catch (error) {
            console.log(error);
        }
    }
    return [chatGPT, getChatGPT];
}