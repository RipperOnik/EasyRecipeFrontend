import * as React from "react";
import ScrollableItem from "./ScrollableItem";
import { Cuisines } from "../../../resources/strings";

function ScrollableForPhone() {
  return (
    <div
      className="container scrollable d-flex"
      style={{
        paddingLeft: "0",
        paddingRight: "0",
      }}
    >
      {Cuisines.map((el, index) => {
        return (
          <ScrollableItem
            key={el.tag}
            displayName={el.displayName}
            iconImage={el.iconImage}
            tag={el.tag}
          />
        );
      })}
    </div>
  );
}

export default ScrollableForPhone;
