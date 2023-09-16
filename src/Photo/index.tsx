import { useEffect, useState } from "react";

import './photo.css';
import { Camera, Modal } from "..";
interface IPhoto {
    setter: Function;
    isOpen: boolean;
    toggle: any;

}
export function Photo({ isOpen, toggle, setter }: IPhoto) {

    // https://codesandbox.io/s/react-camera-component-with-hooks-mf1i2?file=/src/styles.js:0-843
    const [cardImage, setCardImage] = useState();

    useEffect(() => {
        console.log('Photo-useEffect', cardImage);
    }, [cardImage])

    return (
        <Modal isOpen={isOpen} toggle={toggle} classes='photomodal'>
            <div className='productmain'>
                <Camera
                    onCapture={(blob: any) => setCardImage(blob)}
                    onClear={() => setCardImage(undefined)}
                    onSave={() => savePhoto()}
                />
            </div>
        </Modal>
    );

    function savePhoto() {
        console.log('Photo-savePhoto',cardImage);
        setter(cardImage);
        toggle();
    }
}