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
  tracks,
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
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((trackIndex) => trackIndex - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="p-3">
      <div className="flex justify-center  *:px-5 *:text-2xl *:firt:ps-0 *:last:pe-0">
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>
        <div>
          <button
            onClick={togglePlayPause}
            className="bg-[#ee966a] p-3 rounded-full shadow-[#ee966a]"
          >
            {isPlaying ? (
              <IoPauseSharp />
            ) : (
              <IoPlaySharp className="text-center" />
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
      <div className="hidden">
        <div>
          <button onClick={() => setMuteVolume((muteVolume) => !muteVolume)}>
            {muteVolume || volume < 5 ? (
              <IoMdVolumeOff />
            ) : volume < 40 ? (
              <IoMdVolumeLow />
            ) : (
              <IoMdVolumeHigh />
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
          />
        </div>
      </div>
    </div>
  );
};
export default Controls;
