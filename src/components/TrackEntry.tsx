import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { createUseStyles } from "react-jss";
import { TrackEdit } from "../types";

// @ts-ignore (importing image with the help of gatsby-source-filesystem)
import audioJungleLogo from "../../images/audio-jungle-logo-1.webp";

// @ts-ignore
import sumpulseLogo from "../../images/logo_lg.jpg";

const useStyles = createUseStyles({
  container: {
    maxWidth: 920,
    display: "flex",
    marginTop: 36,
  },
  picture: {
    margin: [[0, 20, 0, 0]],
    width: 124,
    height: 124,
  },
  title: {
    fontSize: 18,
    fontWeight: 300,
    textTransform: "uppercase",
    margin: 0,
  },
  description: {
    fontSize: 12,
    letterSpacing: 0.5,
    margin: [[24, 0]],
  },
  playerWrapper: {
    display: "flex",
    alignItems: "center",
    maxWidth: 600,
  },
  type: {
    flex: [[0, 0, "80px"]],
    fontSize: 12,
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
  coverSlug: string;
  edits: TrackEdit[];
}

const TrackEntry = (props: Props) => {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState(encodeURI(`/artworks_sm/${props.coverSlug}.jpg`));
  return (
    <div className={classes.container}>
      <img className={classes.picture} src={imgUrl} onError={e => setImgUrl(sumpulseLogo)} alt="" />
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
    </div>
  );
};

export default TrackEntry;
