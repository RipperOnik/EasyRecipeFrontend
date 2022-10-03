import * as React from "react";
import ScrollableItem from "./ScrollableItem";
import { Cuisines } from "../../../resources/strings";

function ScrollableForPC() {
  const scrollable = React.useRef(null);

  return (
    <div className="contaner">
      <div className="row">
        <div className="col-1 d-flex justify-content-end">
          <div className="align-self-center" style={{ zIndex: "7" }}>
            {" "}
            <button
              className="floating-arrow-button"
              onClick={() => {
                if (window.innerWidth > 1000) {
                  (scrollable.current as unknown as Element).scrollBy(-1150, 0);
                } else if (
                  window.innerWidth < 1000 &&
                  window.innerWidth > 615
                ) {
                  (scrollable.current as unknown as Element).scrollBy(-615, 0);
                } else if (window.innerWidth > 300) {
                  (scrollable.current as unknown as Element).scrollBy(-307, 0);
                }
              }}
            >
              {"<"}
            </button>
          </div>
        </div>
        <div className="col-10">
          <div
            className="container-fluid scrollable d-flex"
            style={{
              paddingLeft: "0",
              paddingRight: "0",
            }}
            ref={scrollable}
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
        </div>
        <div className="col-1 d-flex justify-content-start">
          <div
            className="align-self-center"
            style={{
              zIndex: "7",
              paddingRight: "0",
              paddingLeft: "0",
            }}
          >
            {" "}
            <button
              className="floating-arrow-button"
              onClick={() => {
                if (window.innerWidth > 1000) {
                  (scrollable.current as unknown as Element).scrollBy(1150, 0);
                } else if (
                  window.innerWidth < 1000 &&
                  window.innerWidth > 615
                ) {
                  (scrollable.current as unknown as Element).scrollBy(615, 0);
                } else if (window.innerWidth > 300) {
                  (scrollable.current as unknown as Element).scrollBy(307, 0);
                }
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollableForPC;
