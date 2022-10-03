import * as React from "react";
import ScrollableItem from "./ScrollableItem";
import {Cuisines} from "../../../resources/strings"




function Scrollable() {

  // const scrollable = React.useRef(null)

  // function scrollRight(){
  //   if(scrollable !== null){
  //     (scrollable as unknown as HTMLElement).scrollBy(100,0)
  //   }
  // }
  // function scrollLeft(){
  //   if(scrollable !== null){
  //     (scrollable as unknown as HTMLElement).scrollBy(-100,0)
  //   }
  // }

  return (
    <div className="container-fluid scrollable d-flex" style={{marginBottom: '50px'}}>
      {/* <div className="align-self-center" style={{position: "fixed", zIndex: "7", left: "0"}}> <button className="floating-arrow-button" onClick={scrollLeft}>{"<"}</button></div> */}
      {Cuisines.map((el, index) => {
        return <ScrollableItem key={el.tag} displayName={el.displayName} iconImage={el.iconImage} tag={el.tag} />
      })}
      {/* <div className="align-self-center" style={{position: "fixed", zIndex: "7", right: "0"}}> <button className="floating-arrow-button" onClick={scrollRight}>{">"}</button></div> */}
    </div>
  );
}

export default Scrollable;
