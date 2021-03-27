import { Link } from "gatsby";
import React, { FC } from "react";
import FilterBar from "../components/FilterBar";
import Layout from "../components/Layout";
import MusicPlayer from "../components/MusicPlayer";
import TrackEntry from "../components/TrackEntry";
import { tracks, trackEdits } from "../../data/tracks";

const tracklist = Object.keys(tracks).map(id => {
  const track = tracks[id];
  const edit = trackEdits[id];
  return {
    title: track.title,
    description: track.description,
    edits: [{
      type: edit.type,
      audioSources: edit.audioSources,
      storeLinks: edit.storeLinks
    }]
  }
})

const Music: FC = () => (
  <Layout>
    <FilterBar />
    {tracklist.map(track => <TrackEntry {...track} />)}
  </Layout>
);


export default Music;
