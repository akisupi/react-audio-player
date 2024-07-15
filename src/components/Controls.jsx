/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
// icons
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff } from "react-icons/io";
import {
  IoPlaySharp,
  IoPlayForwardSharp,
  IoPlayBackSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPauseSharp,
} from "react-icons/io5";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  initialTracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(40);
  const [muteVolume, setMuteVolume] = useState(false);

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  const togglePlayPause = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      //   playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      //   cancelAnimationFrame(playAnimationRef.current);
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, isPlaying, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex == 0) {
      let lastTrackIndex = initialTracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(initialTracks[lastTrackIndex]);
    } else {
      setTrackIndex((trackIndex) => trackIndex - 1);
      setCurrentTrack(initialTracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="w-full my-auto md:flex md:justify-between">
      <div className="flex justify-between w-full *:mx-auto *:my-auto  *:text-2xl *:firt:ms-0 *:last:me-0 md:w-[60%] md:*:text-4xl landscape:*:text-xl">
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>
        <div className="flex my-auto mx-auto">
          <button
            onClick={togglePlayPause}
            className="bg-[#ee966a] rounded-full flex mx-auto my-auto h-14 w-14 md:h-[70px] md:w-[70px] landscape:w-[40px] landscape:h-[40px]"
          >
            {isPlaying ? (
              <IoPauseSharp className="m-auto text-2xl md:text-4xl landscape:-text-xl" />
            ) : (
              <IoPlaySharp className="m-auto text-2xl md:text-4xl landscape:text-xl" />
            )}
          </button>
        </div>
        <button onClick={skipForward}>
          <IoPlayForwardSharp />
        </button>
        <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
      <div className="hidden md:block md:w-[30%] md:my-auto">
        <div className="flex justify-between *:my-auto *:first:me-2">
          <button
            onClick={() => setMuteVolume((muteVolume) => !muteVolume)}
            className=""
          >
            {muteVolume || volume < 5 ? (
              <IoMdVolumeOff className="text-3xl landscape:text-xl" />
            ) : volume < 40 ? (
              <IoMdVolumeLow className="text-3xl landscape:text-xl" />
            ) : (
              <IoMdVolumeHigh className="text-3xl landscape:text-xl" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            style={{
              background: `linear-gradient(to right, #ee966a ${volume}%, #ccc ${volume}%)`,
            }}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default Controls;
