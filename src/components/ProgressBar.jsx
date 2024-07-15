/* eslint-disable react/prop-types */
import "../styles/progress-bar.css";

const ProgressBar = ({ progressBarRef, audioRef, duration, timeProgress }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="flex justify-between w-full my-auto">
      <span className="text-[12px] md:text-2xl">{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        className="my-auto mx-3"
      />
      <span className="text-[12px] md:text-2xl">{formatTime(duration)}</span>
    </div>
  );
};
export default ProgressBar;
