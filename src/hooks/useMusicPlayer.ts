import { useState, useEffect } from "react";

function useMusicPlayer() {
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [playing, setPlaying] = useState<boolean>(false);
    const [clickedTime, setClickedTime] = useState<any>();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let audio: any = document.getElementById("audio");

        // state setters wrappers
        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }

        const setAudioTime = () => setCurrentTime(audio.currentTime);

        // DOM listeners: update React state on DOM events
        audio.addEventListener("loadeddata", setAudioData);

        audio.addEventListener("timeupdate", setAudioTime);

        // React state listeners: update DOM on React state changes
        playing ? audio.play() : audio.pause();

        if (clickedTime && clickedTime !== currentTime) {
            audio.currentTime = clickedTime;
            setClickedTime(null);
        }

        // effect cleanup
        return () => {
            audio.removeEventListener("loadeddata", setAudioData);
            audio.removeEventListener("timeupdate", setAudioTime);
            audio = null
        }
    });

    return {
        currentTime,
        duration,
        playing,
        setPlaying,
        setClickedTime
    }
}

export default useMusicPlayer;