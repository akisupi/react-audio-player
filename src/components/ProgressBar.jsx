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
    <div className="flex p-3">
      <span className="text-[12px] ps-0 pe-1 mt-0">
        {formatTime(timeProgress)}
      </span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        className="mt-[7px] mb-8"
      />
      <span className="text-[12px] ps-1 pe-0 mt-0">{formatTime(duration)}</span>
    </div>
  );
};
export default ProgressBar;
