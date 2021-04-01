import React from "react";
import MusicPlayer from "./MusicPlayer";
import { createUseStyles } from "react-jss";
import { TrackEdit } from "../types";

// @ts-ignore (importing image with the help of gatsby-source-filesystem)
import audioJungleLogo from "../../images/audio-jungle-logo-1.webp";

const useStyles = createUseStyles({
  title: {
    fontSize: 19, // letters look too tall with even numbers
    fontWeight: 300,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 13,
  },
  playerWrapper: {
    display: "flex",
    alignItems: "center",
    maxWidth: 600,
  },
  type: {
    flex: [[0, 0, "80px"]],
    fontSize: 13,
    fontWeight: 500,
    textTransform: "capitalize",
  },
  storeLogo: {
    width: 20,
    height: 22,
    marginLeft: 5,
  },
});

interface Props {
  title: string;
  description: string;
  edits: TrackEdit[];
}

const TrackEntry = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.description}>{props.description}</p>
      {props.edits.map((edit) => (
        // so far there is only one edit type possible
        <section key={edit.type} className={classes.playerWrapper}>
          <span className={classes.type}>{edit.type}</span>
          <MusicPlayer urls={edit.audioSources.map((source) => source.url)} />
          <a href={edit.storeLinks.audioJungle}>
            <img className={classes.storeLogo} src={audioJungleLogo} />
          </a>
        </section>
      ))}
    </div>
  );
};

export default TrackEntry;
