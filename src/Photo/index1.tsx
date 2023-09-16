import { useState } from "react";
import './photo.css';

interface IPhoto {
    value: string | number;
    setter: Function;
    children?: React.ReactNode;
}

export function Photo({ value, setter,  children }: IPhoto) {
    const [theValue, setTheValue] = useState(value)
    const handleChange = (e: any) => {
        setTheValue(e);
        setter(e);
    }
    const width = 320;
    let height = 0;
    let streaming = false;
    let video: any = null;
    let canvas: any = null;
    let photo: any = null;
    let startbutton = document.getElementById('startbutton');
    startup();

    return (
        <>
            <div className="camera">
                <video id="video">Video stream not available.</video>
                <button id="startbutton">Take photo</button>
            </div>
            <canvas id="canvas"></canvas>
            <div className="output" id="output">
                <img id="photo" alt="The screen capture will appear in this box." />
            </div>
        </>
    )
    function startup() {
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        photo = document.getElementById('photo');
        //startbutton = document.getElementById('startbutton');
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error(`An error occurred: ${err}`);
            });
        video.addEventListener(
            "canplay",
            (ev:any) => {
                if (!streaming) {
                    height = (video.videoHeight / video.videoWidth) * width;
                    video.setAttribute("width", width);
                    video.setAttribute("height", height);
                    canvas.setAttribute("width", width);
                    canvas.setAttribute("height", height);
                    streaming = true;
                }
            },
            false,
        );
        startbutton!.addEventListener(
            "click",
            (ev) => {
                takepicture();
                ev.preventDefault();
            },
            false,
        );
        clearphoto();
    }
    function clearphoto() {
        const context = canvas.getContext("2d");
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);

        const data = canvas.toDataURL("image/png");
        photo.setAttribute("src", data);
    }
    function takepicture() {
        const context = canvas.getContext("2d");
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);

            const data = canvas.toDataURL("image/png");
            photo.setAttribute("src", data);
        } else {
            clearphoto();
        }
    }

}