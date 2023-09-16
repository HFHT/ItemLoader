import { useEffect, useState } from "react";

import './photo.css';
import { Camera } from "..";
interface IPhoto {
    isOpen: boolean;
    setter: Function;

}
export function Photo({ isOpen, setter }: IPhoto) {

    // https://codesandbox.io/s/react-camera-component-with-hooks-mf1i2?file=/src/styles.js:0-843
    const [cardImage, setCardImage] = useState();

    useEffect(() => {
        console.log('Photo-useEffect', cardImage);
    }, [cardImage])

    return (
            <div className='productmain'>
                <Camera
                    isOpen={isOpen}
                    onCapture={(blob: any) => setCardImage(blob)}
                    onClear={() => setCardImage(undefined)}
                    onSave={() => savePhoto()}
                />
            </div>
    );

    function savePhoto() {
        console.log('Photo-savePhoto',cardImage);        
        setter(cardImage);
    }
}