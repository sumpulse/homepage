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
    controlHeight: 24
  }
});

const selectStyles = {
  container: (styles) => ({
    ...styles,
    borderColor: highlightColor,
    flex: "0 0 120px",
    margin: "0 20px"
  }),
  control: (styles) => ({
    ...styles,
    border: "none",
    borderRadius: 0,
    fontSize,
    fontWeight: 400
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

const genreOptions = Object.values(categories.genres).map((genre) => ({
  value: genre.id,
  label: genre.name,
}));

genreOptions.unshift({
  value: null,
  label: "All Genres"
});

const storeOptions = Object.values(categories.stores).map((store) => ({
  value: store.id,
  label: store.name,
}));

const FilterBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.filterBar}>
      <div className={classes.filters}>filters:</div>
      <Select
        isClearable={false}
        styles={selectStyles}
        theme={mapTheme}
        options={genreOptions}
        placeholder="Select Genre.."
        defaultValue={"dubstep"}
      />
      <Select
        isClearable={false}
        styles={selectStyles}
        theme={mapTheme}
        options={genreOptions}
        placeholder="Select Genre.."
      />
      <Select
        styles={selectStyles}
        theme={mapTheme}
        options={storeOptions}
        placeholder="Store.."
      />
    </div>
  );
};

export default FilterBar;
