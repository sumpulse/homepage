import React from "react";
import { createUseStyles } from "react-jss";
import Select from "react-select";
import categories from "../../data/categories";
import chroma from "chroma-js";

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

const fontSize = 14;
const highlightColor = chroma("#0096ba");
const backgroundColor = chroma("rgb(37, 37, 37)");
const foregroundColor = chroma("white");

const neutralColor = backgroundColor;

const mapTheme = (theme) => ({
  ...theme,
  borderRadius: 2,
  colors: {
    ...theme.colors,
    primary: highlightColor.brighten(0.5).css(),
    primary75: highlightColor.css(),
    primary50: highlightColor.darken(0.5).css(),
    primary25: highlightColor.darken().css(),
    danger: highlightColor.darken().css(),
    dangerLight: highlightColor.brighten().css(),
    neutral0: neutralColor.css(),
    neutral5: neutralColor.brighten().css(),
    neutral10: neutralColor.brighten().css(),
    neutral20: neutralColor.brighten(2).css(),
    neutral30: neutralColor.brighten(2).css(),
    neutral40: neutralColor.brighten(3).css(), // placeholder
    neutral50: neutralColor.brighten(3).css(), // placeholder
    neutral60: neutralColor.brighten(4).css(),
    neutral70: neutralColor.brighten(4).css(),
    neutral80: neutralColor.brighten(5).css(),
    neutral90: neutralColor.brighten(5).css(),
  },
  spacing: {
    baseUnit: 2,
    menuGutter: 2,
    controlHeight: 24,
  },
});

const selectStyles = {
  container: (styles) => ({
    ...styles,
    borderColor: highlightColor,
    flex: "0 0 200px",
    margin: "0 10px",
  }),
  control: (styles) => ({
    ...styles,
    border: "none",
    borderRadius: 0,
    fontSize,
    fontWeight: 400,
  }),
  placeholder: (styles) => ({
    ...styles,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    width: 24,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (styles) => ({
    ...styles,
    fontSize,
  }),
};

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
      <Select
        isClearable={false}
        styles={selectStyles}
        theme={mapTheme}
        options={moodOptions}
        defaultValue={allMoods}
        onChange={(...args) => onSelectChange("mood", ...args)}
      />
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
