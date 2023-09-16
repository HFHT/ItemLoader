import { useState, useRef, useEffect } from "react";
import './camera.css';

import { useUserMedia } from "../../hooks";
import { Button } from "..";

interface ICamera {
    isOpen: boolean;
    onCapture: Function;
    onClear: Function;
    onSave: Function;
}

const CAPTURE_OPTIONS = {
    audio: false,
    video: {
        facingMode: "environment",
        width: 800,
        height: 800
    }
};

export function Camera({ isOpen, onCapture, onClear, onSave }: ICamera) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [container, setContainer] = useState({ width: 0, height: 0 });
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);

    const mediaStream = useUserMedia(CAPTURE_OPTIONS, isOpen);
    // const offsets = useOffsets(
    //     videoRef.current ? videoRef.current.videoWidth : 0,
    //     videoRef.current ? videoRef.current.videoHeight : 0,
    //     container.width,
    //     container.height
    // );

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    // function handleResize(contentRect: any) {
    //     console.log('Camera-handleResize');
    //     setContainer({
    //         width: contentRect.bounds.width,
    //         height: Math.round(contentRect.bounds.width / aspectRatio)
    //     });
    // }

    function handleCanPlay() {
        if (!videoRef.current) return
        // calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
        setIsVideoPlaying(true);
        videoRef.current.play();
    }

    function handleCapture() {
        console.log('Camera-handleCapture', canvasRef, container);
        if (!canvasRef.current) return
        const context = canvasRef.current.getContext("2d");
        if (!context || !videoRef.current) return

        context.drawImage(
            videoRef.current,
            0,
            0,
            800,
            800,
            0,
            0,
            300,
            300
        );

        // canvasRef.current.toBlob(blob => onCapture(blob), "image/jpeg", 1);
        onCapture(canvasRef.current.toDataURL("image/png").slice(22))
        setIsCanvasEmpty(false);
    }

    function handleClear() {
        console.log('Camera-handleClear', canvasRef);

        if (!canvasRef.current) return

        const context = canvasRef.current.getContext("2d");
        if (!context) return
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setIsCanvasEmpty(true);
        onClear();
    }

    function handleSave() {
        console.log('Camera-handleSave', canvasRef);
        if (!canvasRef.current) return
        handleClear();
        setIsCanvasEmpty(true)
        onSave();
    }

    if (!mediaStream) {
        return null;
    }

    // useEffect(() => {
    //     !isOpen && handleClear()
    // }, [isOpen])


    return (

        <div>
            <div className='container'>
                <video className='video'
                    ref={videoRef}
                    hidden={!isVideoPlaying || !isOpen}
                    onCanPlay={handleCanPlay}
                    autoPlay
                    playsInline
                    muted
                    width={'300px'}
                    height={'300px'}
                    style={{
                        top: `-${0}px`,
                        left: `-${0}px`
                    }}
                />
                <canvas className='canvas' width={'300px'} height={'300px'} ref={canvasRef} />
                {/* <div className='overlay' hidden={!isVideoPlaying} /> */}

            </div>

            {isVideoPlaying && (
                <>
                    <div className='photocontrols'>
                        <Button onClick={() => handleClear()} hidden={isCanvasEmpty} classes='photobtn'>Retry</Button>
                        <Button onClick={() => handleCapture()} hidden={!isCanvasEmpty} classes='photobtn'>Photo</Button>
                        <Button onClick={() => handleSave()} hidden={isCanvasEmpty} classes='photobtn'>&nbsp;&nbsp;OK&nbsp;</Button>
                    </div>
                </>
            )}
        </div>

    );
}
