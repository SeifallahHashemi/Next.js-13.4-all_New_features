import React, {useState} from 'react';
import throttle from "lodash.throttle";

const DownloadButtonProgress = () => {
    const [progress, setProgress] = useState<number>(0)
    const updateProgress = throttle((value: number) => {
        setProgress(value)
    }, 100, { leading: true , trailing: true})
    const clickHandler = async () => {
        const response = await fetch("https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        // const blob = await response.blob();
        if (!response?.body) return;
        const reader = response.body.getReader();
        const contentLength = response.headers.get("Content-Length");
        const totalLength = typeof contentLength === "string" && parseInt(contentLength);
        console.log("totalLength", totalLength);
        const chunks = [];
        let receivedLength = 0;
        while (true) {
            const {done, value} = await reader.read();
            if (done) {
                console.log("done reading")
                break;
            }
            chunks.push(value);
            receivedLength = receivedLength + value.length;
            if (typeof totalLength === "number") {
                const step = parseFloat((receivedLength / totalLength).toFixed(2)) * 100;
                updateProgress(step)
            }
        }
        const blob = new Blob(chunks)
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "file.jpg";
        function downloadHandler() {
            setTimeout(() => {
                URL.revokeObjectURL(url);
                a.removeEventListener("click", downloadHandler);
            }, 200)
        }
        a.addEventListener("click", downloadHandler)
        a.click();
    }
    return (
        <div>
            <button className={"py-2 px-3 bg-cyan-600 text-white"} onClick={clickHandler}>Download</button>
            <span className={"block text-md font-black mt-1 text-white"}>{ progress?.toFixed() }% Complete</span>
            <div className="w-[600px] h-4 relative rounded overflow-hidden">
                <span className={"absolute w-full h-full bg-amber-600 transition-all"}></span>
                <span className={`absolute w-full h-full top-0 ${progress < 0 ? "hidden" : "block" } bg-gray-400 transition-all`} style={{ right: 100-progress+"%"}}></span>
            </div>
        </div>
    );
};

export default DownloadButtonProgress;