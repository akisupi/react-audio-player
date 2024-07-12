import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import { tracks } from "../data/tracks";
import { useState, useRef } from "react";
import Footer from "./Footer";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  // const [favorite, setFavorite] = useState(currentTrack.favorite);

  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((trackIndex) => trackIndex + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };


  return (
    <div>
      <DisplayTrack
        {...{
          currentTrack,
          setCurrentTrack,
          audioRef,
          progressBarRef,
          setDuration,
          handleNext,

        }}
      />
      <ProgressBar {...{ progressBarRef, audioRef, duration, timeProgress }} />
      <Controls
        {...{
          audioRef,
          progressBarRef,
          duration,
          setTimeProgress,
          tracks,
          trackIndex,
          setTrackIndex,
          setCurrentTrack,
          handleNext,
        }}
      />
      <Footer />
    </div>
  );
};
export default AudioPlayer;
