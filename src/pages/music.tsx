import React, { FC, useState } from "react";
import Select from "react-select";
import FilterBar from "../components/FilterBar";
import Layout from "../components/Layout";
import TrackEntry from "../components/TrackEntry";
import { tracks, trackEdits } from "../../data/tracks";
import { FilterType, Track } from "../types";
import categories from "../../data/categories";
import Pager from "../components/Pager";
import { createUseStyles } from "react-jss";
import { createSelectStyles, createThemeMapper } from "../selectConfig";

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
    filteredTracks = filteredTracks.filter((track) =>
      // at least one of the track's genres is the selected
      track.genres.includes(filters[FilterType.Genre])
    );
  }
  if (filters[FilterType.Tempo]) {
    const tempo = tempos[filters[FilterType.Tempo]];
    filteredTracks = filteredTracks.filter(
      // track is in the selected BPM range
      (track) => tempo.minBpm <= track.bpm && tempo.maxBpm > track.bpm
    );
  }
  if (filters[FilterType.Store]) {
    filteredTracks = filteredTracks.filter((track) =>
      track.edits.some((edit) =>
        // at least one version of the track is available at the selected store
        Object.keys(edit.storeLinks).includes(filters[FilterType.Store])
      )
    );
  }
  return filteredTracks;
}

const selectStyles = createSelectStyles("50px");
const mapTheme = createThemeMapper();

const pageSizeOptions = [
  { value: 10, label: 10 },
  { value: 20, label: 20 },
  { value: 50, label: 50 },
];

const useStyles = createUseStyles({
  pagerContainer: {
    fontSize: 13,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 36,
  },
  pagerOptions: {
    display: "flex",
    alignItems: "center"
  }
});

const Music: FC = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({} as FilterData);
  const [filteredTracks, setFilteredTracks] = useState(tracklist);
  const onSelectChange = (selectId, selectedData, actionData) => {
    if (actionData.action === "select-option") {
      const newFilters = {
        ...filters,
        [selectId]: selectedData.value,
      };
      setFilters(newFilters);
      setFilteredTracks(filterTracklist(newFilters));
      setPage(0);
    }
  };
  return (
    <Layout>
      <FilterBar onSelectChange={onSelectChange} />
      {filteredTracks.slice(page * pageSize, (page + 1) * pageSize).map((track) => (
        <TrackEntry key={track.id} {...track} />
      ))}
      <div className={classes.pagerContainer}>
        <div className={classes.pagerOptions}>
          Show
          <Select
            isClearable={false}
            styles={selectStyles}
            theme={mapTheme}
            options={pageSizeOptions}
            defaultValue={pageSizeOptions[0]}
            onChange={(selectedData, actionData) => {
              if (actionData.action === "select-option") {
                setPageSize(selectedData.value);
                setPage(0);
              }
            }}
          />
          products
        </div>
        <Pager pageCount={Math.max(Math.ceil(filteredTracks.length / pageSize), 1)} currentPage={page} onPagination={setPage} />
      </div>
    </Layout>
  );
};

export default Music;
