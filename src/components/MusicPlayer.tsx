import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { createUseStyles, Styles } from "react-jss";
import Play from "./icons/Play";
import Pause from "./icons/Pause";
import VolumeUp from "./icons/VolumeUp";
import Mute from "./icons/Mute";

const playerElementMargin = [["auto", 5]];

const buttonStyle = {
  flex: [[0, 0, "auto"]],
  width: 12,
  border: "none",
  margin: playerElementMargin,
  padding: 0,
  paddingTop: 2,
  background: "transparent",
};

const useStyles = createUseStyles({
  player: {
    display: "flex",
    width: "100%",
    height: 28,
    // border: "1px solid red",
  },
  playButton: {
    ...buttonStyle,
  },
  volumeButton: {
    ...buttonStyle,
    width: 16, // the waves take up a lot of space but the speaker icon is small in comparison
  },
  timer: {
    flex: [[0, 0, "auto"]],
    fontWeight: 700,
    fontSize: 11,
    margin: playerElementMargin,
  },
  rangeWrapper: {
    left: -8,
    right: -8,
    position: "absolute",
    height: 10,
    opacity: 0,
  },
  rangeBar: {
    position: "absolute",
    width: "100%",
    height: 10,
    cursor: "pointer",
  },
  progressBar: {
    position: "relative",
    flex: [[1, 1, "auto"]],
    margin: playerElementMargin,
    height: 8,
    borderRadius: 3,
    background: "grey",
  },
  progressBand: {
    borderRadius: 3,
    position: "absolute",
    height: 8,
    background: "white",
  },
  volumeBar: {
    position: "relative",
    flex: [[0, 1, "80px"]],
    margin: playerElementMargin,
    height: 8,
    borderRadius: 3,
    background: "grey",
  },
  volumeBand: {
    borderRadius: 3,
    position: "absolute",
    height: 8,
    background: "white",
  },
});

const Timer = ({ seconds, className = "" }) => (
  <div className={className}>
    {Math.floor(seconds / 60)}:{("0" + Math.floor(seconds % 60)).slice(-2)}
  </div>
);

const MusicPlayer = ({ urls }) => {
  const classes = useStyles();
  const player = useRef(null);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setMuted] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [isSeeking, setSeeking] = useState(false);

  return (
    <div className={classes.player}>
      <ReactPlayer
        ref={player}
        playing={isPlaying}
        url={urls}
        onProgress={(state) => {
          if (isSeeking) {
            return;
          }
          setPlayed(state.played);
          setPlayedSeconds(state.playedSeconds);
        }}
        onSeek={(sec) => setPlayedSeconds(sec)}
        onDuration={(sec) => setDurationSeconds(sec)}
        muted={isMuted}
        volume={volume}
        width={0}
        height={0}
      />
      <button
        className={classes.playButton}
        title="Play/Pause"
        onClick={() => setPlaying(!isPlaying)}
      >
        {isPlaying ? <Pause fill="white" /> : <Play fill="white" />}
      </button>
      <Timer className={classes.timer} seconds={playedSeconds} />
      <div className={classes.progressBar}>
        <div
          className={classes.progressBand}
          style={{ width: `${played * 100}%` }}
        />
        <div className={classes.rangeWrapper}>
          <input
            className={classes.rangeBar}
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={() => setSeeking(true)}
            onChange={(event) => setPlayed(parseFloat(event.target.value))}
            onMouseUp={(event) => {
              player.current?.seekTo(
                parseFloat((event.target as HTMLInputElement).value)
              );
              setSeeking(false);
            }}
          />
        </div>
      </div>
      <Timer className={classes.timer} seconds={durationSeconds} />
      <button
        className={classes.volumeButton}
        title="Volume/Mute"
        onClick={() => setMuted(!isMuted)}
      >
        {isMuted ? <Mute fill="white" /> : <VolumeUp fill="white" />}
      </button>
      <div className={classes.volumeBar}>
        <div
          className={classes.volumeBand}
          style={{ width: `${volume * 100}%` }}
        />
        <div className={classes.rangeWrapper}>
          <input
            className={classes.rangeBar}
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={(event) => setVolume(parseFloat(event.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
