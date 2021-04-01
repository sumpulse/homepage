import React, { FC, useState } from "react";
import FilterBar from "../components/FilterBar";
import Layout from "../components/Layout";
import TrackEntry from "../components/TrackEntry";
import { tracks, trackEdits } from "../../data/tracks";

const tracklist = Object.keys(tracks).map(id => {
  const track = tracks[id];
  const edit = trackEdits[id];
  return {
    id,
    title: track.title,
    description: track.description,
    edits: [{
      type: edit.type,
      audioSources: edit.audioSources,
      storeLinks: edit.storeLinks
    }]
  }
})

const selectIds = ["genre", "tempo", "mood", "store"];

const Music: FC = () => {
  const [filters, setFilters] = useState({
    genre: null,
    tempo: null,
    mood: null,
    store: null,
  })
  const onSelectChange = (selectId, selectedData, actionData) => {
    if (actionData.action === "select-option") {
      setFilters({
        ...filters,
        [selectId]: selectedData.value,
      })
    }
  }
  let filteredTracks = tracklist;
  selectIds.forEach(id => {
    // if (filters[id] === null) {

    // }
  });
  return (
    <Layout>
      <FilterBar onSelectChange={onSelectChange} />
      {tracklist.map(track => <TrackEntry key={track.id} {...track} />)}
    </Layout>
  );
};


export default Music;
