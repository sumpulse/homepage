import React, { FC, useState } from "react";
import FilterBar from "../components/FilterBar";
import Layout from "../components/Layout";
import TrackEntry from "../components/TrackEntry";
import { tracks, trackEdits } from "../../data/tracks";
import { FilterType, Track, TrackEdit } from "../types";
import categories from "../../data/categories";

const tracklist: Track[] = Object.keys(tracks).map((id) => {
  const track = tracks[id];
  const edit = trackEdits[id];
  return {
    id: track.id,
    title: track.title,
    description: track.description,
    bpm: track.bpm,
    fullLengthSec: track.fullLengthSec,
    genres: track.genres,
    edits: [
      {
        type: edit.type,
        audioSources: edit.audioSources,
        storeLinks: edit.storeLinks,
      },
    ],
  };
});

type Tempo = {
  id: string;
  name: string;
  minBpm: number;
  maxBpm: number;
};

const tempos: Record<string, Tempo> = categories.tempos;

type FilterData = Record<FilterType, string>;

function filterTracklist(filters: FilterData): Track[] {
  let filteredTracks = tracklist;
  if (filters[FilterType.Genre]) {
    filteredTracks = tracklist.filter((track) =>
      // at least one of the track's genres is the selected
      track.genres.includes(filters[FilterType.Genre])
    );
  }
  if (filters[FilterType.Tempo]) {
    const tempo = tempos[filters[FilterType.Tempo]];
    filteredTracks = tracklist.filter(
      // track is in the selected BPM range
      (track) => tempo.minBpm < track.bpm && tempo.maxBpm > track.bpm
    );
  }
  if (filters[FilterType.Store]) {
    filteredTracks = tracklist.filter((track) =>
      track.edits.some((edit) =>
        // at least version of the track is available at the selected store
        Object.keys(edit.storeLinks).includes(filters[FilterType.Store])
      )
    );
  }
  return filteredTracks;
}

const Music: FC = () => {
  const [filters, setFilters] = useState({} as FilterData);
  const onSelectChange = (selectId, selectedData, actionData) => {
    if (actionData.action === "select-option") {
      setFilters({
        ...filters,
        [selectId]: selectedData.value,
      });
    }
  };
  return (
    <Layout>
      <FilterBar onSelectChange={onSelectChange} />
      {filterTracklist(filters).map((track) => (
        <TrackEntry key={track.id} {...track} />
      ))}
    </Layout>
  );
};

export default Music;
