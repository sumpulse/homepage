import React from "react";
import { FC } from "react";
import { createUseStyles } from "react-jss";

const buttonStyle = {
  margin: [[5, 10]],
  cursor: "pointer",
  // '&:hover': {
  //   border: "1px solid white"
  // }
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  pageButton: buttonStyle,
  currentPageButton: {
    ...buttonStyle,
    borderBottom: "1px solid white",
  },
  inactivePageButton: {
    ...buttonStyle,
    opacity: 0.5,
  },
});

type Paginator = (pageIndex: number) => void;

interface Props {
  pageCount: number;
  currentPage: number;
  onPagination: Paginator;
}

const Pager: FC<Props> = ({ pageCount, currentPage, onPagination }) => {
  // create an array of (page) numbers
  const pageIndices = Array.from(Array(pageCount).keys());
  const classes = useStyles();
  return (
    <div>
      <a key="first" className={classes.pageButton} onClick={() => onPagination(0)}>
        First
      </a>
      <a
        key="previous"
        className={currentPage === 0 ? classes.inactivePageButton : classes.pageButton}
        onClick={() => currentPage !== 0 && onPagination(currentPage - 1)}
      >
        Previous
      </a>
      {pageIndices.map((i) => (
        <a
          key={i}
          className={currentPage === i ? classes.currentPageButton : classes.pageButton}
          onClick={() => onPagination(i)}
        >
          {i + 1}
        </a>
      ))}
      <a
        key="next"
        className={currentPage === pageCount - 1 ? classes.inactivePageButton : classes.pageButton}
        onClick={() => currentPage !== pageCount - 1 && onPagination(currentPage + 1)}
      >
        Next
      </a>
      <a key="last" className={classes.pageButton} onClick={() => onPagination(pageCount - 1)}>
        Last
      </a>
    </div>
  );
};

export default Pager;
