import React from "react";
import { createUseStyles } from "react-jss";
import Select from "react-select";
import categories from "../../data/categories";
import chroma from "chroma-js";

const useStyles = createUseStyles({
  filterBar: {
    display: "flex",
    fontFamily: "sans",
    fontWeight: "normal",
    alignItems: "center",
  },
  filters: {
    fontFamily: "YiBaiti",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
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
});

const selectStyles = {
  container: (styles) => ({
    ...styles,
    borderColor: highlightColor,
    flex: "0 0 40%",
    margin: "0 2.5%"
  }),
  control: (styles) => ({
    ...styles,
    border: "none",
    borderRadius: 0,
    fontSize,
  }),
  placeholder: (styles) => ({
    ...styles,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    fontSize,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (styles) => ({
    ...styles,
    fontSize,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    // backgroundColor: isDisabled
    //   ? null
    //   : isSelected
    //   ? highlightColor
    //   : isFocused
    //   ? highlightColor
    //   : null,
  }),
};

const genreOptions = Object.values(categories.genres).map((genre) => ({
  value: genre.id,
  label: genre.name,
}));

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
        isMulti
        isClearable={false}
        styles={selectStyles}
        theme={mapTheme}
        options={genreOptions}
        placeholder="Select Genre.."
      />
      <Select
        isMulti
        styles={selectStyles}
        theme={mapTheme}
        options={storeOptions}
        placeholder="Store.."
      />
    </div>
  );
};

export default FilterBar;
