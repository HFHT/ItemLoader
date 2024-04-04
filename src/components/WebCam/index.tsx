import './webcam.css';

import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from '../Button';

interface ICamera {
    setter: Function;
}

export const WebcamCapture = ({ setter }: ICamera) => {
    const webcamRef = useRef(null)
    const [newImg, setNewImg] = useState('')
    const [imgSrc, setImgSrc] = useState<string[]>([])
    const [cam, toggleCam] = useState(true)

    const capture = useCallback(() => {
        if (!webcamRef) return
        if (!webcamRef.current) return
        //@ts-ignore
        const imageSrc: string = webcamRef.current.getScreenshot({ width: 800, height: 800 })
        setNewImg(imageSrc)
    }, [webcamRef])

    const saveimg = () => {
        if (imgSrc.length === 0) return
        setter(imgSrc)
    }
    const deleteImg = (i: number) => {
        let theImgs: string[] = imgSrc
        theImgs.splice(i, 1)
        setImgSrc([...theImgs])
    }

    useEffect(() => {
        console.log('newImg', newImg, imgSrc)
        if (newImg === '') return
        let theImgs: string[] = imgSrc
        console.log(theImgs)
        theImgs.push(newImg)
        console.log(theImgs)
        setImgSrc([...theImgs])

    }, [newImg])

    return (
        <div className='phototop'>
            <div>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ width: 400, height: 400, facingMode: setCamera() }}
                />
                <div className='photocontrols'>
                    <Button onClick={() => toggleCam(!cam)} classes='photobtn'>Camera</Button>
                    <Button onClick={capture} classes='photobtn'>Photo</Button>
                    <Button disabled={imgSrc.length === 0} onClick={saveimg} classes='photobtn'>&nbsp;&nbsp;OK&nbsp;</Button>
                </div>
            </div>
            <div className='img-gallery'>
                {(imgSrc.length > 0) && imgSrc.map((thisImg: string, idx: number) => (
                    <img key={idx} alt='' width='400'
                        src={thisImg} onClick={() => deleteImg(idx)}
                    />
                ))}
            </div>
        </div>
    );
    function setCamera() {
        if (!cam) return {}
        return { exact: "environment" }
    }
};


// https://www.npmjs.com/package/react-webcam
