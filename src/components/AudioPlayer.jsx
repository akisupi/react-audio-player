// import components
import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import { tracks } from "../data/tracks";
import Footer from "./Footer";

// import hooks
import { useState, useRef, useEffect } from "react";

// fetch inital tracks from local storage or return tracks if local storage is empty
const getInitialTracks = () => {
  const temp = localStorage.getItem("tracks");
  const savedTracks = JSON.parse(temp);
  return savedTracks || tracks;
};

const AudioPlayer = () => {
  const [initialTracks, setInitialTracks] = useState(getInitialTracks()); // initialize with the fetched data
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(initialTracks[0]);
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  // const [favorite, setFavorite] = useState(false);

  const audioRef = useRef();
  const progressBarRef = useRef();

  useEffect(() => {
    const temp = JSON.stringify(initialTracks);
    localStorage.setItem("tracks", temp);
  }, [initialTracks]); // store tracks to localstorage whenever they change

  useEffect(() => {
    setCurrentTrack(initialTracks[trackIndex]);
  }, [trackIndex, initialTracks]); // update currentTrack when trackindex or initial tracks change

  const handleNext = () => {
    if (trackIndex >= initialTracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(initialTracks[0]);
    } else {
      setTrackIndex((trackIndex) => trackIndex + 1);
      setCurrentTrack(initialTracks[trackIndex + 1]);
    }
  };

  const toggleFavorite = () => {
    const updatedTracks = initialTracks.map((track, index) =>
      index === trackIndex ? { ...track, favorite: !track.favorite } : track
    );
    setInitialTracks(updatedTracks);
    // setCurrentTrack(updatedTracks[trackIndex]);
  };

  return (
    <div className="w-screen h-dvh px-4 py-2 md:px-20 landscape:flex landscape:justify-between">
      <div className="h-[68%] landscape:w-[45%] landscape:h-full landscape:mx-auto">
        <div className="h-full landscape:my-auto">
          <DisplayTrack
            {...{
              currentTrack,
              setCurrentTrack,
              audioRef,
              progressBarRef,
              setDuration,
              handleNext,
              // favorite,
              toggleFavorite,
            }}
          />
        </div>
      </div>

      <div className="h-[32%] landscape:w-[45%] landscape:h-[80%] landscape:mx-auto landscape:my-auto">
        <div className="h-[20%] flex landscape:my-auto">
          <ProgressBar
            {...{ progressBarRef, audioRef, duration, timeProgress }}
          />
        </div>

        <div className="h-[64%] flex">
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              initialTracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
        </div>

        <div className="h-[16%] flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
