/* eslint-disable react/prop-types */
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  progressBarRef,
  setDuration,
  handleNext,
  // favorite,
  toggleFavorite,
}) => {
  const onLoadedMetadata = () => {
    const durationSeconds = audioRef.current.duration;
    setDuration(durationSeconds);
    progressBarRef.current.max = durationSeconds;
  };

  return (
    <div className="h-full">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="block h-full">
        <div className="flex justify-center h-[85%] w-full">
          {currentTrack.thumbnail ? (
            <img
              src={currentTrack.thumbnail}
              alt="audio avatar"
              className="rounded-xl h-full w-full md:w-[70%]"
            />
          ) : (
            <div className="flex my-auto ">
              <span>
                <BsMusicNoteBeamed className="text-9xl md:text-[250px]" />
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-between h-[15%]">
          <div className="my-auto">
            <strong className="text-2xl text-slate-200 md:text-4xl">
              {currentTrack.title}
            </strong>
            <p className="text-sm text-slate-400 md:text-2xl">{currentTrack.authour}</p>
          </div>
          <span className="my-auto">
            <button onClick={toggleFavorite}>
              {currentTrack.favorite ? (
                <MdOutlineFavorite className="text-3xl text-orange-600 md:text-5xl" />
              ) : (
                <MdOutlineFavoriteBorder className="text-2xl text-slate-200 md:text-4xl" />
              )}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
