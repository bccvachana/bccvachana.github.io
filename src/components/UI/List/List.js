import React from "react";
import classes from "./List.module.scss";

const List = (props) => {
  const { comma, lists, className } = props;
  return (
    <div
      className={`${classes.List} ${comma ? classes["Comma"] : ""} ${
        className ? className : ""
      }`}
    >
      {lists.map((list, index) => (
        <div key={list}>
          {!comma ? `#${list}` : index === lists.length - 1 ? list : `${list},`}
        </div>
      ))}
    </div>
  );
};

export default List;
