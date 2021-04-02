import React from "react";
import MusicPlayer from "./MusicPlayer";
import { createUseStyles } from "react-jss";
import { TrackEdit } from "../types";

// @ts-ignore (importing image with the help of gatsby-source-filesystem)
import audioJungleLogo from "../../images/audio-jungle-logo-1.webp";

const useStyles = createUseStyles({
  container: {
    maxWidth: 920,
    display: "flex",
    marginTop: 36,
  },
  cover: {
    margin: [[0, 20, 0, 0]],
  },
  title: {
    fontSize: 18,
    fontWeight: 300,
    textTransform: "uppercase",
    margin: 0
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
  edits: TrackEdit[];
}

const TrackEntry = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.cover}
        src="https://lh3.googleusercontent.com/fife/ABSRlIrOCLUZcx3cmPEFQ3wiSQ-tu0op5kspdC-2yglWY4JDmz2PGX9MOIWC3r2UHX088jI7_musO9vzhrgLulbsKn7JR2gKRN8seSmd1uxfenvN7o9tdN4dceG8gaf5edjCgAc6ADxgFPVBwQufBnc0o5UwySN7OWr9VjINgSEX876f15fdCuPRbe3XM4K70HTGMQpqIghZRWT_kU-Xhs_B4km0PPdPOkYbHX3Wrz4tEF67p7TNACmqCh0sW4cdhxTHupwn4ZoamLhsCQaXkfe11K1SVQfwpRkqgAbGktNAO9oOTk28YYZjktiQna-dFpo7TggqPb_gJUQ-4FXK1W0xZB3WGny88FTaBB3DZPuat1QnsKl_UOEOZptg7EXrFUNJ78UnTlYUU312cR4IBgmWI1cj7jg0QYltQuC4k24NRUxSqU9TVks97X-jcQlsA6LOt6i03V_g6cmFcMSLENtjvoE5Ek5NFdx61n6uJhFseD4sFXp6blkr1D2C5evLo6P49kyYL2Q0VxguXdfnafEoqaRnivKSXRFgn0NVOE6IETBzEFG6BT_5in2EjiN6-bEA9E7ytbK896z91AQBUhaj7DDhY0UOPYHyxo9dIXzE4Y3BhyBGMvCBusNTMFTc5zClj0ns5b7sbAdlAleAe2KsdEIZ-aSbZ8c-ZJheYBzbP7y91-wP8jgi6SDq9wGufix_PB-GMt1yTTuY3SvqlTsTEx8G4PImTx17Aw=w1920-h938-ft"
      />
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
