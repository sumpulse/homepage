import React from "react";
import { createUseStyles } from "react-jss";
import Select from "react-select";
import categories from "../../data/categories";
import { createSelectStyles, createThemeMapper } from "../selectConfig";

const useStyles = createUseStyles({
  filterBar: {
    display: "flex",
    fontWeight: "normal",
    alignItems: "center",
  },
  filters: {
    textTransform: "uppercase",
    fontSize: 14,
  },
});

const categoryToOption = (category) => ({
  value: category.id,
  label: category.name,
});

const genreOptions = Object.values(categories.genres).map(categoryToOption);
const storeOptions = Object.values(categories.stores).map(categoryToOption);
const tempoOptions = Object.values(categories.tempos).map(categoryToOption);
const moodOptions = Object.values(categories.moods).map(categoryToOption);

const allGenres = {
  value: null,
  label: "All Genres",
};

const allTempos = {
  value: null,
  label: "All Tempos",
};

const allMoods = {
  value: null,
  label: "All Moods",
};

const allStores = {
  value: null,
  label: "All Stores",
};

genreOptions.unshift(allGenres);
tempoOptions.unshift(allTempos);
moodOptions.unshift(allMoods);
storeOptions.unshift(allStores);

const selectStyles = createSelectStyles("200px");
const mapTheme = createThemeMapper();

const FilterBar = ({ onSelectChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.filterBar}>
      <div className={classes.filters}>filters:</div>
      <Select
        isClearable={false}
        styles={selectStyles}
        theme={mapTheme}
        options={genreOptions}
        defaultValue={allGenres}
        onChange={(...args) => onSelectChange("genre", ...args)}
      />
      <Select
        isClearable={false}
        styles={selectStyles}
        theme={mapTheme}
        options={tempoOptions}
        defaultValue={allTempos}
        onChange={(...args) => onSelectChange("tempo", ...args)}
      />
      {/* <Select
        isClearable={false}
        styles={selectStyles}
        theme={mapTheme}
        options={moodOptions}
        defaultValue={allMoods}
        onChange={(...args) => onSelectChange("mood", ...args)}
      /> */}
      <Select
        styles={selectStyles}
        theme={mapTheme}
        options={storeOptions}
        defaultValue={allStores}
        onChange={(...args) => onSelectChange("store", ...args)}
      />
    </div>
  );
};

export default FilterBar;
