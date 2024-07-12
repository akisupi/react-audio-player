/* eslint-disable react/prop-types */
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  progressBarRef,
  setDuration,
  handleNext,
  toggleFavorite,
}) => {
  const onLoadedMetadata = () => {
    const durationSeconds = audioRef.current.duration;
    setDuration(durationSeconds);
    progressBarRef.current.max = durationSeconds;
  };

  return (
    <div className="p-3">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="">
        <div className="flex justify-center h-[50vh]">
          {currentTrack.thumbnail ? (
            <img
              src={currentTrack.thumbnail}
              alt="audio avatar"
              className="rounded-xl h-[50vh]"
            />
          ) : (
            <div>
              <span>
                <BsMusicNoteBeamed className="rounded h-[50vh]" />
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-between pt-4 pb-4">
          <div>
            <strong className="text-2xl text-slate-200">
              {currentTrack.title}
            </strong>
            <p className="text-xs text-slate-400">{currentTrack.authour}</p>
          </div>
          <span>
            <button onClick={toggleFavorite}>
              {currentTrack.favorite ? (
                <MdOutlineFavorite className="text-2xl text-orange-600" />
              ) : (
                <MdOutlineFavoriteBorder className="text-2xl text-slate-200" />
              )}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
